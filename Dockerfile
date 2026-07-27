FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
# nginx.conf ne peut pas etre exclu via .dockerignore (le COPY ci-dessus en a
# besoin), donc on le retire de la racine web ici. Sans ca il est servi
# publiquement : constate en prod le 26/07/2026.
RUN rm -f /usr/share/nginx/html/nginx.conf

# Pre-compression, lue par `gzip_static on` (present dans le paquet nginx
# officiel, verifie dans les arguments de compilation de nginx/pkg-oss).
# Faite une fois a la construction plutot qu'a chaque requete : niveau 9 au
# lieu de 5, zero CPU par visiteur, et surtout la reponse porte un
# Content-Length au lieu de partir en flux sans taille annoncee.
# On compresse APRES le rm ci-dessus, sinon nginx.conf.gz resterait servi
# alors que l'original a ete retire.
# Le .gz est jete s'il n'est pas plus petit que l'original : sur les fichiers
# tres courts, gziper alourdit.
RUN find /usr/share/nginx/html -type f \
      \( -name '*.html' -o -name '*.css' -o -name '*.js' -o -name '*.json' \
         -o -name '*.xml' -o -name '*.txt' -o -name '*.svg' \) \
      -exec sh -c 'gzip -9 -c "$1" > "$1.gz"; \
        if [ "$(wc -c < "$1.gz")" -ge "$(wc -c < "$1")" ]; then rm -f "$1.gz"; fi' _ {} \;

EXPOSE 80
