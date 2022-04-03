# Possibility to specify which image to use for building
ARG FROM_IMAGE=node:16-alpine

# Build server stage
FROM $FROM_IMAGE as Builder
WORKDIR /src
ARG VITE_SANITY_PROJECT_ID
ARG VITE_SANITY_DATASET
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM alpine:latest
WORKDIR /dist
ENV PORT 8080
RUN apk add --no-cache tzdata
RUN apk update && apk add nodejs yarn && rm -rf /var/cache/apk/*
COPY --from=Builder /src/build ./build
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
EXPOSE 8080
ENTRYPOINT ["node", "./build/index.js"]