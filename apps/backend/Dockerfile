# Root-level Dockerfile for Mercur (backend)
FROM node:20-alpine

# Sistem bağımlılıkları
RUN apk add --no-cache libc6-compat

# Çalışma dizini
WORKDIR /app

# Tüm repo'yu kopyala (monorepo; workspaces)
COPY . .

# Bağımlılıkları kur
# (yarn.lock varsa --frozen-lockfile, yoksa normal)
RUN yarn install --frozen-lockfile || yarn install

# Prod ortam
ENV NODE_ENV=production

# Backend çalışma dizini
WORKDIR /app/apps/backend

# Port (Railway kendi portunu ayarlasa da expose etmek sorun değil)
EXPOSE 9000

# ÖNEMLİ: Burada migrate ÇALIŞTIRMIYORUZ.
# Migrate'i Railway Shell'de bir kere çalıştıracağız.

# Sunucuyu başlat
CMD ["yarn", "medusa", "start"]
