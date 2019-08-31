FROM node:12.8.1-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g protractor@5.4.2
RUN apk add openjdk8
ENV PATH $PATH:/usr/lib/jvm/java-1.8-openjdk/bin
COPY . .
EXPOSE 4200 4444
CMD npm start