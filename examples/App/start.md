### 1.安装工具
确认 Node.js 已经升级到 v4.x 或以上,
使用 node -v 查看版本。

确认npm源切换到 http://registry.npm.sogou,
使用 npm config get registry 查看npm源。

使用 npm config set registry http://registry.npm.sogou 切换源。

### 2.创建一个项目
我们提供了快速创建项目的脚手架, 使用方式:

npm install -g @bizfe/biz-mo-init

mkdir biz-mobile-demo

cd biz-mobile-demo

biz-mo-init (会在当前目录创建biz-mobile-demo项目目录)

npm install

### 3.开发调试

npm start

### 4.组件使用
```javascript
import { Button } from '@bizfe/biz-mobile-ui'
```

具体使用详看各Demo

### 5.构建和部署
npm run p

### 学习资料
[react](https://facebook.github.io/react/docs/hello-world.html)

[ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus)

[less](http://lesscss.cn/)

[webpack](http://webpack.github.io/docs/)

[react-router](https://github.com/ReactTraining/react-router)
