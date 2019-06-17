FROM php:7-fpm-alpine
RUN apk update \
    && apk add \
               libxml2-dev \
    && docker-php-ext-install -j$(nproc) xmlrpc
RUN docker-php-ext-install -j$(nproc)  mysqli pdo_mysql pdo mbstring

