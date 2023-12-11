FROM node:19 as buildStep
WORKDIR /app
COPY package-lock.json package.json tsconfig.json ./
RUN npm install && npm install typescript -g
COPY src/ ./src/
RUN npx tsc

FROM node:alpine as ExecuteStep
WORKDIR /app
COPY --from=buildStep /app .
CMD ["node", "build/index.js"] 
