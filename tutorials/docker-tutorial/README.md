# Docker DockerCompose　体験

### 注意事項

- Dockerはしっかり学ぼうと思うと大変難しい内容になってきます。
- 今回の体験会を通して、大まかなイメージを掴んでいただければ大丈夫です。
- Dockerの環境構築に関しましては、今回は体験する時間を確保する為、割愛させていただいております。



### Docker Compose で WordPress を起動しよう
#### docker-compose.yaml
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
 Docker-docs-ja（https://docs.docker.jp/compose/wordpress.html）より

### Rails、 MySQLをDockerComposeで起動しよう

#### DockerHubアカウントの作成
- https://docs.docker.jp/mac/step_five.html 



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

#### docker-compose.yaml
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

#### database.ymlに追記
- ファイルの場所
  - 作成したフォルダ名(docker-rails)/config/database.yml
> 大体20行目~25行目
```

```
↓
```
development:
  <<: *default
  database: myapp_development
  host: db
  username: root
  password: password
```
> 大体29行目~34行目
```

```
↓
```
test:
  <<: *default
  database: myapp_test
  host: db
  username: root
  password: password
```

#### development.rbに追記
- Blocked hostエラーの対応
- ファイルの場所
  - 作成したフォルダ名(docker-rails)/config/environments/development.rb
> 大体4行目
```
Rails.application.configure do
  config.hosts.clear #ここを追記
  # Settings specified here will take precedence over those in config/application.rb.
```
