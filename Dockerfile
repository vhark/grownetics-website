FROM nginx:1.27-alpine
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/conf.d/default.conf.bak 2>/dev/null || true
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
