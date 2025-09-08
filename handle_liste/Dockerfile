FROM node:22 AS base
WORKDIR /usr/local/app
# Install tini for proper signal handling
RUN apt-get update && apt-get install -y tini

# CLIENT / FRONTEND STAGES
# STAGE: client-base
FROM base as client-base
COPY frontend/handleListe/package.json frontend/handleListe/package-lock.json ./
RUN npm install
COPY frontend/handleListe/index.html ./
COPY frontend/handleListe/public ./public
COPY frontend/handleListe/src ./src
# STAGE: client-dev
FROM client-base AS client-dev
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["npm", "run", "dev"]


# STAGE: client-build
FROM client-base AS client-build
RUN npm run build

