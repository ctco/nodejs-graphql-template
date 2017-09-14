# Prepare

FROM node:8.4.0-alpine AS base

RUN mkdir -p /opt/app

WORKDIR /opt/app

# Install

FROM base AS dependencies

COPY package.json .
COPY yarn.lock .

RUN yarn --production --ignore-scripts --prefer-offline
RUN cp -R node_modules production_node_modules
RUN yarn

# Build

FROM base AS build

COPY --from=dependencies /opt/app/node_modules  /opt/node_modules
ENV PATH /opt/node_modules/.bin:$PATH

COPY . /opt/app

RUN yarn build

# Run

FROM base AS run

COPY --from=dependencies /opt/app/production_node_modules ./node_modules
COPY --from=build /opt/app .

ENV PORT 3001
ENV HOST 0.0.0.0
ENV NODE_ENV production

HEALTHCHECK CMD curl -fs http://$HOST:$PORT/healthz || exit 1

EXPOSE $PORT

CMD [ "node", "build/server.js" ]
