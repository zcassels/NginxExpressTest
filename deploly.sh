#! /usr/bin/bash

set -e

npm install

tsc

docker build . -t docker.meeples-local.duckdns.org/nodetestapp:0.0.1
docker push docker.meeples-local.duckdns.org/nodetestapp:0.0.1

# docker run -it --rm  docker.meeples-local.duckdns.org/nodetestapp:0.0.1

