# Contribuer

Ce dépôt est le canal de livraison de le site vitrine de Romain Ben servi sur `www.romainben.cloud`. Il contient ce qui part en
production, pas le projet : le site se développe dans le vault Obsidian et se
publie par une pull request vers `main` depuis le dossier `01 Site Romain/Romainben.cloud_Sprint_V4.1` du vault. Ce guide fixe ce qui se passe entre un commit
et la mise en ligne.

En participant, vous acceptez le [code de conduite](CODE_OF_CONDUCT.md).

## Comment ça se publie

1. Chaque modification part sur une branche et passe par une pull request vers
   `main`, marquée pour fusion automatique (`gh pr merge --auto --squash`).
2. La CI construit l'image de production et la vérifie (`nginx -t`, pages,
   redirections, en-têtes, compression), contrôle les documents et relit les
   dépendances. La pull request n'est fusionnée qu'une fois `image`, `docs` et
   `dependency-review` au vert : rien n'arrive en production sans être passé
   par la CI.
3. La fusion sur `main` déclenche le webhook Coolify : l'image est reconstruite
   et déployée en quelques dizaines de secondes.
4. La branche `main` est protégée par un ruleset : pas de suppression, pas de
   force push, pull request et vérifications requises. Les administrateurs
   gardent le push direct, réservé au correctif urgent : il part en production
   avant le résultat de la CI, et GitHub le rappelle au push par « required
   status checks are expected ».

## Dependabot et auto-merge

Dependabot propose chaque semaine les montées de version de l'image nginx du
`Dockerfile` et des GitHub Actions. Les mises à jour patch et mineures sont
fusionnées automatiquement une fois la CI passée, ce qui déploie l'image mise
à jour ; les majeures reçoivent un commentaire et attendent une relecture.

Le smoke test de la CI (`scripts/verifier-image.sh`) est ce qui rend cet
auto-merge sûr : une image nginx qui perdrait `gzip_static` ou un module ne
passerait pas les vérifications.

## Vérifier l'image en local

```bash
docker build -t site .
docker run --rm site nginx -t
docker run -d --name site -p 8080:80 site
bash scripts/verifier-image.sh        # BASE=http://localhost:8080 par défaut
docker rm -f site
```

Pour les fichiers Markdown, comme dans la CI :

```bash
npx markdownlint-cli2
lychee --offline --include-fragments "**/*.md"
```

## Règles

- L'image est la source de vérité : aucun volume monté sur
  `/usr/share/nginx/html` côté Coolify.
- Tout bloc `location` qui pose un `add_header` doit répéter les en-têtes de
  sécurité : nginx n'hérite pas les `add_header` d'un bloc parent dès qu'un
  bloc enfant en déclare un.
- Une nouvelle page publique, une redirection ou un en-tête ajouté se
  vérifient dans `scripts/verifier-image.sh`.
- Aucun secret dans le dépôt : les fichiers de configuration locaux (webhooks,
  clés) restent hors versionnement.
- Les commits ont un résumé court à l'impératif ou au présent, en français,
  comme l'historique existant.
