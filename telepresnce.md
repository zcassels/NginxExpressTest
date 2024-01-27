telepresence connect -n nodetest
telepresence quit 

telepresence list

telepresence intercept nodetest --port 3000:8080 --env-file ./test.env


docker build . -t docker.meeples-local.duckdns.org/nodetestapp:0.0.2
docker run -it -p 8080:3000 --env-file ./test.env --rm docker.meeples-local.duckdns.org/nodetestapp:0.0.2