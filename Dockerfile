# Prepare

FROM node:8.4.0-alpine AS base

RUN mkdir -p /opt/app

WORKDIR /opt/app

# Install

FROM base AS dependencies

COPY package.json .
COPY yarn.lock .

RUN yarn

# Build

FROM base AS build

COPY --from=dependencies /opt/app/node_modules ./node_modules
COPY . /opt/app

RUN yarn build && \
    yarn --production --ignore-scripts --prefer-offline

# Run

FROM base AS run

COPY --from=build /opt/app .

ENV PORT 3001
ENV HOST 0.0.0.0
ENV NODE_ENV production

HEALTHCHECK CMD curl -fs http://$HOST:$PORT/healthz || exit 1

EXPOSE $PORT

CMD [ "node", "build/server.js" ]
