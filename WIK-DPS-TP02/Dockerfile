FROM node:alpine
WORKDIR /app
COPY package-lock.json package.json tsconfig.json ./
RUN npm install && npm install typescript -g
COPY src/ ./src/
RUN npx tsc
CMD ["npm", "build/index.js"] 
