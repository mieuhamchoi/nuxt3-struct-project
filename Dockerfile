FROM node:16.20.0-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]   
