# node.js + express 튜토리얼

- server : node.js + express.js
- client: vue.js + vue-element-admin

## 서버 시작 방법

``` shell
# 패키지 설치
npm install

# npm script 실행
npm start
```

## MySQL 사용 방법

- [사용 방법 확인](https://www.npmjs.com/package/mysql2)

```js
// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});
 
// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
 
// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);
```

## CommonJS와 ESModule

- [JavaScript 표준을 위한 움직임: CommonJS와 AMD](https://d2.naver.com/helloworld/12864)
- [You don't know JS module](https://ui.toast.com/weekly-pick/ko_20190418/)

### (1) CommonJS

`nodejs` 환경에서는 `CommonJS`를 사용함

```js
// export01.js에 다음과 같이 정의 되어있다고 가정
module.a = 10;
module.b = 20;
module.c = (a, b) => a + b;

// export02.js에 다음과 같이 정의 되어있다고 가정
module.exports = {
  d: 100,
  e: 200,
  f: (a, b) => a * b
};

// 위의 export01.js와 export02.js는 다음과 같이 import 하여 사용할 수 있음
const export01 = require('./export01.js');
const export02 = require('./export02.js');
console.log(export01.a); // 10
console.log(export01.b); // 20
console.log(export01.c(10, 20)); // 30
console.log(export02.d); // 100
console.log(export02.e); // 200
console.log(export02.f(3, 4)); // 12

// 다음과 같이 구조해체문법(destructuring)으로 가져올 수 있음 
const { a, b, c } = require('./export01.js');
const { d, e, f } = require('./export02.js');
console.log(a); // 10
console.log(b); // 20
console.log(c(10, 20)); // 30
console.log(d); // 100
console.log(e); // 200
console.log(f(3, 4)); // 12

// node_modules에서 가져올 경우에는 패키지 명만 명시하면 됨
const express = require('express'); // express를 node_modules에서 가져옴

// userRoute를 ./src/modules/user/user.route.js 에서 가져옴
const userRoute = require('./src/modules/user/user.route');
``` 

### (2) ESModule

브라우저(크롬) 혹은 webpack을 이용하면 ESModule을 사용할 수 있음.

```js
// export01.js에 다음과 같이 정의 되어있다고 가정
export const a = 10;
export const b = 20;
export const c = (a, b) => a + b;

// export02.js에 다음과 같이 정의 되어있다고 가정
export default {
  d: 100,
  e: 200,
  f: (a, b) => a * b
};

// 위의 export01.js와 export02.js는 다음과 같이 import 하여 사용할 수 있음
import * as export01 from './export01.js';
import export02 from './export02.js';

console.log(export01.a); // 10
console.log(export01.b); // 20
console.log(export01.c(10, 20)); // 30
console.log(export02.d); // 100
console.log(export02.e); // 200
console.log(export02.f(3, 4)); // 12

// 다음과 같이 구조해체문법(destructuring)으로 가져올 수 있음 
import { a, b, c } from './export01.js';
import export02 from './export02.js';
const { d, e, f } = export02; // export default로 내보냈을 경우엔 직접 구조해체를 해야 됨
console.log(a); // 10
console.log(b); // 20
console.log(c(10, 20)); // 30
console.log(d); // 100
console.log(e); // 200
console.log(f(3, 4)); // 12

// node_modules에서 가져올 경우에는 패키지 명만 명시하면 됨
import express from 'express';

// userRoute를 ./src/modules/user/user.route.js 에서 가져옴
import userRoute from './src/modules/user/user.route';
```

브라우저에서 esm을 사용할 경우 다음과 같이 ``type="module"`을 명시해야됨

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <!-- type="module" 명시  -->
  <script src="./src/app.js" type="module"></script>
</body>
</html>
```