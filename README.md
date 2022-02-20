# app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### APIs

```
GET
1.获取位置信息
  /api/getLocation
2.获取商店列表
  /api/getShop
3.获取首页轮播图
  /api/getNavigation
4.获取互帮互助列表
  /api/getHelperList

POST
1.发送验证码
  /api/users/sendCode
  query:phone
2.使用手机号验证码登录
  /api/users/loginWithPhoneAndCode
  query:phone,code
3.已登录的用户获取用户信息
  /api/users/getUserInfo
  query:token
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
