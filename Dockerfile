FROM node:8.4.0

# Prepare

RUN mkdir -p /opt/app

ENV TINI_VERSION v0.16.1
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

ENV PORT 3001
ENV HOST 0.0.0.0
EXPOSE $PORT

HEALTHCHECK CMD curl -fs http://$HOST:$PORT/healthz || exit 1

# Install

WORKDIR /opt
COPY package.json /opt
COPY yarn.lock /opt

RUN yarn

ENV PATH /opt/node_modules/.bin:$PATH

# Build

WORKDIR /opt/app
COPY . /opt/app

RUN yarn build && \
    yarn --production --ignore-scripts --prefer-offline && \
    yarn cache clean

# Run

ENV NODE_ENV production

CMD [ "node", "build/server.js" ]
