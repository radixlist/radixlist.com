# Build stage
FROM node:18.6 as builder
WORKDIR /builder
COPY . .
RUN yarn
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production

# Runtime
FROM node:18.6-alpine
WORKDIR /app
COPY --from=builder /builder/node_modules /app/node_modules
COPY --from=builder /builder/package.json /app/package.json
COPY --from=builder /builder/build /app/build

EXPOSE 3000
CMD ["node", "./build"]