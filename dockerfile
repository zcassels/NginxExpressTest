FROM node:18

WORKDIR /opt/express/

COPY package.json /opt/express/
COPY ./dist /opt/express/
COPY ./node_modules /opt/express/node_modules

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]