FROM node:18.13.0

WORKDIR /app/
COPY ./frontend .
COPY ./deployments/frontend/config.env .env

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]