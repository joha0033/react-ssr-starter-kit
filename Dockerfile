# # base image
# FROM keymetrics/pm2:latest-alpine
# WORKDIR /react-ssr-starter-kit
# COPY . /react-ssr-starter-kit
# COPY package.json .
# COPY ecosystem.config.js .
# # ENV NPM_CONFIG_LOGLEVEL warn
# RUN npm install
# RUN npm run build-webpack
# RUN npm run build-node
# # COPY . /react-ssr-starter-kit
# EXPOSE 5000
# # RUN ls -al -R
# # start app
# CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
# # CMD ["npm", "start"]


FROM keymetrics/pm2:latest-alpine

# Bundle APP files
WORKDIR /usr/src/app

COPY package.json .
COPY pm2.json .

# Install app dependencies
RUN npm install

COPY . .

#RUN ls -al -R
EXPOSE 5000

RUN npm run build-webpack
RUN npm run build-node


CMD [ "pm2-runtime", "start", "pm2.json" ]