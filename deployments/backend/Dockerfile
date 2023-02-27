FROM node:18.13.0

# Create app directory
WORKDIR /app/BACK

COPY ./backend .
COPY ./deployments/backend/config.env .env

# Install app dependencies
RUN npm install

RUN npm uninstall bcrypt
RUN npm i bcrypt
RUN npm uninstall prisma
RUN npm i prisma
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:migrate:dev"]
CMD ["npm", "run", "start:prisma-studio"]
CMD ["npm", "run", "dev"]