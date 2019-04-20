# nuxt-init

> Nuxt.js project

## Build Setup

``` bash
# 开发
$ yarn dev

# 动态部署
$ yarn build:<env>
$ pm2 start npm --n <taskname> -- run start:<env>
$ pm2 restart/delete <taskname or id>

# 静态部署
$ yarn build:<env>
$ yarn generate
$ docker-compose up -d
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

