FROM node:16.15.1

WORKDIR /app

COPY "package.json" .

RUN yarn

COPY . .

CMD ["yarn", "dev"]

FROM postgres:latest

ARG POSTGRES_PASSWORD=1234

ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}