FROM registry.access.redhat.com/ubi9/ubi:latest

ARG HTTP_PORT
ARG REPO_URL

ENV APP_PORT=${HTTP_PORT}
ENV REPO_URL=${REPO_URL}

RUN dnf install -y httpd && \
    dnf clean all && \
    rm -rf /var/cache/dnf/* && \
    sed -i -e "s/^Listen 80/Listen ${APP_PORT}/g" /etc/httpd/conf/httpd.conf && \
    sed -i -e "s/^#ServerName.*/ServerName localhost/g" /etc/httpd/conf/httpd.conf && \
    chgrp -R 0 /var/log/httpd /var/run/httpd && \
    chmod -R g=u /var/log/httpd /var/run/httpd

WORKDIR /var/www/html

COPY index.html .

# Add script
#COPY script.sh /bin
#RUN chmod +x /bin/script.sh

ADD ${REPO_URL} /tmp/script.sh

LABEL description="My httpd container application" \
      io.k8s.description="My httpd container application" \
      io.openshift.expose-services="8080:http" \
      io.openshift.tags="httpd, web server, apache, apache2"

EXPOSE ${APP_PORT}

USER 1001

ENTRYPOINT /usr/sbin/httpd -DFOREGROUND
