FROM lambci/lambda:build-nodejs8.10
LABEL maintainer="Allandhino pattras <allandhino.pattras@hara.ag>"
ADD . .
RUN npm install -g serverless@1.27.2 && \
    npm install