# nodejs-mvc

最近初次用 nodejs 写 api,用 Chatgpt 写了个 express+mysql 的 mvc 框架 demo，方便以后拿来用

## mysql 服务

```
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=game -p 3306:3306 -d mysql:latest
```

## 配置 env

```
DB_NAME=game
DB_USER=root
DB_PASSWORD=123456
DB_HOST=localhost
```

## 运行

```
npm install
node app.js
```
