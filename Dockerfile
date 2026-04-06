# Stage 1: Build
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "app.js"]
