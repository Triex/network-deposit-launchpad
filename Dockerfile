# build stage
FROM node:14.10.1-alpine as build-stage
RUN apk update
RUN apk add git python make g++

ARG NETWORK

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN mv .env.$NETWORK .env
RUN cat .env
RUN yarn build

# production stage
FROM nginx:latest as production-stage
COPY ./nginx/frontend.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]