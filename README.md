# menta-copy-app

1. Dockerイメージのビルド

```
docker-compose build
```

2. 依存関係のインストール

* Frontend（Next.js）の依存関係をインストールします。

```
docker-compose run --rm front yarn install
```

* Backend（Rails API）の依存関係をインストールします。

```
docker-compose run --rm api bundle install
```

3. データベースのセットアップ

* 初回のみ実行します。
```
docker-compose run --rm api rails db:create
```

* 必要に応じて、データベースのマイグレーションを実行します。

```
docker-compose run --rm api rails db:migrate
```

4. サービスの起動

```
docker-compose up
```
