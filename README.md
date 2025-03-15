# Nest.js と Prisma のテンプレートレポジトリ

### ディレクトリを変更

```
cd nest_prisma_graphql_firebase_backend/api-server/
```

### .env を作成

```
cp .env.sample .env
```

### ディレクトリを元に戻す

```
cd ../
```

### docker で立ち上げ

```
docker compose up -d
```

### backend コンテナに入る

```
docker exec -it backend sh
```

### パッケージをインストール

```
npm install
```

### Prisma でマイグレーション

```
npx prisma migrate dev --name init
```

### prisma studio 起動

```
npm run studio
```

http://localhost:5555/

### サーバー起動(backend コンテナに入って)

```
npm run start
```

### サーバー起動確認

```
Hello Worldが表示していることを確認
```

### graphql playground

http://localhost:8080/graphql
