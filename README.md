## 路由（react-router）

### 什么是路由
这个概念最先是后端出现的，在以前用模板引擎开发页面时，经常会看到这样：
```
  http://www.baidu.com/forum.ejs
  http://www.baidu.com/forum.asp
  http://www.baidu.com/forum.jsp
  http://www.baidu.com/forum.php
```
### 路由的由来
- **SSR** (Server Side Render)
- **AJAX** (Asynchronous JavaScript And XML)
  - 微软提出 iframe 异步、请求元素概念
  - outlook web app 提出 ActiveX , XMLHttpRequest前身
  - 其他厂商相继以XMLHttpRequest 实现ajax
- **SPA** (Single page web application)
  - 微软Knockoutjs
  - Google Angularjs 
  - react
  - vue
- **PWA** (Progressive Web App)

### 路由的分类
- 后端路由：
  ```md
    URL 与处理函数之间的映射关系
  ```
  - 1.浏览器发出请求
  - 2.服务器监听到端口有请求过来，并解析url路径
  - 3.根据服务器的路由配置，返回相应信息（可以是 html 字串，也可以是 json 数据，图片等）
  - 4.浏览器根据数据包的Content-Type来决定如何解析数据
- 前端路由：
  ```md
    URL 与 UI 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）
  ```
  - hash
  - history

### hash路由
### history 路由
很早以前，浏览器便实现了 history。然而，早期的 history 只能用于多页面进行跳转，比如：
```md
  history.go(-1);       // 后退一页
  history.go(2);        // 前进两页
  history.forward();     // 前进一页
  history.back();      // 后退一页
```
在 HTML5 规范中，history 新增了以下几个 API
```md
  history.pushState();         // 添加新的状态到历史状态栈
  history.replaceState();     // 用新的状态代替当前状态
  history.state             // 返回当前状态对象
```
### 实现思路：
  - 如何改变 URL 却不引起页面刷新
  - 如何检测 URL 变化了