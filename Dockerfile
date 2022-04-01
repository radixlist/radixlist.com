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
RUN apk add --no-cache tzdata
RUN apk update && apk add nodejs && rm -rf /var/cache/apk/*
COPY --from=Builder /src ./
EXPOSE 3000
ENTRYPOINT ["node", "./build/index.js"]