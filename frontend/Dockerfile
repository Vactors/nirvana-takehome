ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}-alpine

USER node
WORKDIR /home/node

COPY --chown=node:node . .

RUN npm ci

EXPOSE 3001

CMD ["npm", "run", "start"]
