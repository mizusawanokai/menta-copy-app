# menta-copy-app

1. menta-copy-appへ移動

```
cd menta-copy-app
```

2. Dockerイメージのビルド

```
docker-compose build --no-cache
```

3. 依存関係のインストール

* Frontend（Next.js）の依存関係をインストールします。

```
docker-compose run --rm frontend npm install
```

* Backend（Rails API）の依存関係をインストールします。

```
docker-compose run --rm backend bundle install
```

4. データベースのセットアップ

* 初回のみ実行します。
```
docker-compose run --rm backend rails db:create
```

* 必要に応じて、データベースのマイグレーションを実行します。

```
docker-compose run --rm backend rails db:migrate
```

5. サービスの起動

```
docker-compose up
```

6. コンテナ内に入る

* backend

```
docker exec -it menta-copy-app-backend-1 /bin/bash
```

* frontend

```
docker exec -it menta-copy-app-frontend-1 /bin/bash
```

* db

```
docker exec -it menta-copy-app-db-1 /bin/bash
```
