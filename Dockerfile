FROM node:18 as dev
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]


FROM node:18 as prod
WORKDIR /app
COPY --from=dev /app/package.json /app/package-lock.json* ./
RUN npm install --production
COPY --from=dev /app/.next ./.next
COPY --from=dev /app/public ./public
COPY --from=dev /app/next.config.js ./
EXPOSE 3000
CMD ["npm", "start"]
