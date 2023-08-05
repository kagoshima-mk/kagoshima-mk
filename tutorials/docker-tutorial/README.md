# Docker　体験

### 注意事項

- Dockerはしっかり学ぼうと思うと広い範囲での知識が必要になってきます。
- 今回の体験会を通して、大まかなイメージを掴んでいただければ大丈夫です！
- 今後より学びたいと思った時に、今回の経験がプラスになれば幸いです！
- Dockerの環境構築に関しましては、今回は体験する時間を確保する為、割愛させていただいております。

### Dockerとは？
https://docs.docker.jp/get-started/overview.html

## 体験
- Dockerについて学ぶ際に使うツールとして「Play With Docker」を使用します。
- 理由としてDockerの環境構築をおこなう際、Mac・Windowsでの構築手順に違いがあり、今回の体験会では全て対応するのは難しいと判断いたしました。
- Dockerの環境構築がお済みの方に関しては、ご自分の環境で実施していただいて問題ありません！

#### DockerHubアカウントの作成
- https://docs.docker.jp/mac/step_five.html

#### PlayWithDocker
- https://labs.play-with-docker.com/

## Docker Compose で WordPress を起動しよう
PlayWithDockerのターミナル上で
```
touch docker-compose.yml
```

#### docker-compose.yml
下記内容を貼り付ける

```
version: '3'

services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: somewordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
volumes:
  db_data:

```
#### OPEN PORTに　8000　と入力

 Docker-docs-ja:https://docs.docker.jp/compose/wordpress.html より

## Rails、 MySQLをDockerComposeで起動しよう

#### PlayWithDockerのターミナル上でディレクトリ・フォルダ作成
```
mkdir docker-rails
```

#### PlayWithDockerのターミナル上でディレクトリ・フォルダに移動
```
cd docker-rails
```

#### PlayWithDockerのターミナル上で作成したディレクトリ・フォルダ内でファイルの作成
```
touch Dockerfile
```

```
touch Gemfile
```

```
touch Gemfile.lock
```

```
touch docker-compose.yml
```

#### Dockerfile
```
FROM ruby:3.2.1
RUN apt-get update -qq && apt-get install -y nodejs
RUN mkdir /myapp
WORKDIR /myapp
ADD Gemfile /myapp/Gemfile
ADD Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
ADD . /myapp
```

#### Gemfile
```
source 'https://rubygems.org'
gem 'rails', '7.0.4.2'
```

#### docker-compose.yml
```
version: '3'
services:
  db:
    image: mysql:8.0.32
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: root
    ports:
      - "3306:3306"
    volumes:
      - ./tmp/db:/var/lib/mysql
  web:
    build: .
    command: bundle exec rails s -p 3000 -b '0.0.0.0'
    volumes:
      - .:/myapp
    ports:
      - "3000:3000"
    depends_on:
      - db
```
#### PlayWithDockerのターミナル上で実行コマンド
```
docker compose run web rails new . --force --no-deps --database=mysql
```
```
docker compose build
```

#### database.ymlに追記
- ファイルの場所
  - 作成したフォルダ名(docker-rails)/config/database.yml
> 大体23行目~25行目あたりに追記
```
development:
  <<: *default
  database: myapp_development
```
↓
```
development:
  <<: *default
  database: myapp_development
  ## ここから追記
  host: db
  username: root
  password: password
  ## ここまで追記
```
> 大体32行目~34行目あたりに追記
```
test:
  <<: *default
  database: myapp_test
```
↓
```
test:
  <<: *default
  database: myapp_test
  ## ここから追記
  host: db
  username: root
  password: password
  ## ここまで追記
```

#### PlayWithDockerのターミナル上で実行コマンド
```
docker compose run web rails db:create
```

#### development.rbに追記
- Blocked hostエラーの対応
- ファイルの場所
  - 作成したフォルダ名(docker-rails)/config/environments/development.rb
> 大体4行目あたりに追記
```
Rails.application.configure do
  ## ここから追記
  config.hosts.clear
  ## ここまで追記
  # Settings specified here will take precedence over those in config/application.rb.
```

#### PlayWithDockerのターミナル上で実行コマンド
```
docker compose up
```
#### OPEN PORTに　3000　と入力
