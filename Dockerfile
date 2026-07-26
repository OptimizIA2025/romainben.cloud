FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
# nginx.conf ne peut pas etre exclu via .dockerignore (le COPY ci-dessus en a
# besoin), donc on le retire de la racine web ici. Sans ca il est servi
# publiquement : constate en prod le 26/07/2026.
RUN rm -f /usr/share/nginx/html/nginx.conf
EXPOSE 80
