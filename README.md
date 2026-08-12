# romainben.cloud

Site vitrine de [Romain Ben](https://www.romainben.cloud), étudiant ingénieur en mathématiques appliquées et modélisation à Polytech Nice Sophia, co-fondateur d'[OptimizIA.xyz](https://www.optimizia.xyz).

Quatre pages statiques, aucun framework, aucune étape de build côté front, et **aucune requête sortante vers un tiers** : polices et bibliothèques sont auto-hébergées.

## Pages

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : parcours, compétences, réalisations en production |
| `cv.html` | CV complet, imprimable en PDF via un bloc `@media print` |
| `contact-rom.html` | Contact et prise de rendez-vous |
| `mentions-legales.html` | Mentions légales |

Chaque page est autonome : son HTML, son CSS et son JavaScript sont inline. Pour développer, il suffit d'ouvrir le fichier dans un navigateur.

## Organisation du dépôt

```
index.html, cv.html, ...        pages, styles et scripts inline
i18n-*.js                       dictionnaires de traduction, un par page
site.js                         comportements partagés
js/                             GSAP et ScrollTrigger, auto-hébergés
fonts/                          Archivo, Karla, JetBrains Mono (sous-ensembles latin)
robots.txt, sitemap.xml, rss.xml
llms.txt, profile.jsonld, ai-index.json, entities.json
Dockerfile, nginx.conf          image de production
```

Les fichiers `llms.txt`, `profile.jsonld`, `ai-index.json` et `entities.json` s'adressent aux crawlers d'IA et aux moteurs de réponse, pas aux navigateurs.

## Internationalisation

Le site bascule entre français et anglais sans rechargement. Trois dictionnaires cohabitent dans chaque `i18n-*.js`, avec des sémantiques différentes :

- `RB_I18N` indexe sur la clé entière, c'est-à-dire le contenu normalisé du nœud
- `RB_I18N_FRAGMENTS` remplace par sous-chaîne, pour les phrases assemblées autour d'une valeur variable
- `RB_I18N_ATTR` vise les attributs

Modifier une chaîne visible impose donc d'identifier d'abord lequel des trois la porte. Un fragment incomplet ne casse rien en français mais laisse la phrase à moitié traduite en anglais.

## Production

L'image se construit à partir de `nginx:1.31-alpine`. Le `Dockerfile` fait deux choses au-delà de la copie des fichiers :

1. il retire `nginx.conf` de la racine web, car `COPY .` y recopie tout le dépôt
2. il pré-compresse en gzip niveau 9 tous les fichiers texte, lus ensuite par `gzip_static`

La pré-compression au build plutôt qu'à la volée donne un meilleur taux, ne coûte aucun CPU par visiteur, et surtout laisse la réponse porter un `Content-Length` réel là où une compression à la volée part en `Transfer-Encoding: chunked`.

`nginx.conf` porte tout ce qui touche au serveur, rien n'est configuré à la main sur la machine : redirection canonique vers `www`, en-têtes de sécurité, politique de cache par famille de fichiers, et types MIME.

### Construire et servir en local

```bash
docker build -t romainben-cloud .
docker run --rm -p 8080:80 romainben-cloud
```

Puis `http://localhost:8080`.

Cette étape n'est pas décorative : certains défauts n'existent qu'une fois l'image construite et ne se voient pas à la lecture du code. L'extension `.jsonld` est absente de la table `mime.types` de nginx, par exemple, ce qui faisait sortir `profile.jsonld` en `application/octet-stream`.

### Déploiement

Un `push` sur `main` déclenche le redéploiement automatiquement. Il n'y a pas d'intégration continue entre les deux : ce qui est fusionné part en production tel quel, y compris une montée de version d'image proposée par Dependabot. Construire l'image en local avant de fusionner.

## Licence

Le contenu du site, textes et images, est protégé par le droit d'auteur.

GSAP et ScrollTrigger, dans `js/`, sont distribués sous licence standard GreenSock, en-tête conservé en tête de fichier. Les polices Archivo, Karla et JetBrains Mono sont sous SIL Open Font License 1.1.
