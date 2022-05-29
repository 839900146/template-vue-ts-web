FROM node:14
COPY ./ /app
WORKDIR /app
RUN npm install --registry https://registry.npmmirror.com/ && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY ./config/nginx.conf /etc/nginx/nginx.conf