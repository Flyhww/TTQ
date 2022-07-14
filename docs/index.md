## 闭包

- 闭包（closure)：函数和其周围的状态（语法环境）的引用捆绑在一起形成闭包。

- 可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员
- 闭包的本质：函数在执行的时候会放到一个执行栈上当函数执行完毕之后会从执行栈移除，但是堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以访问外部函数的成员
- 闭包的好处：延长了外部函数的作用范围



## 柯里化（currying)

- 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）
- 然后返回一个新的函数接收剩余的参数，返回结果

### lodash中的柯里化函数

- 功能：创建一个函数，该函数接收一个或多个func的函数，如果func所需要的参数都被提供则执行func并返回执行的结果。否则继续返回函数并等待接收剩余的参数。
- 参数：需要柯里化的函数
- 返回值：柯里化后的函数



## Vue Router

- 动态路由
- 嵌套路由
- 编程式导航

#### Hash模式和History模式的区别

表现形式的区别

- Hash模式

  https://music.163.com/#/playlist?id=346235

  URL中#后面的内容作为路径地址

- History模式

  https://music.163.com/playlist/346235

原理的区别

- Hash模式是基于描点，以及onhashchange事件

- History模式是基于HTML5中的History API

  history.pushState() IE10以后才支持

  history.replaceState()

#### History模式的使用

- History需要服务器的支持
- 当页应用中，服务端不存在http://www.testurl.com/login这样的地址会返回找不到该页面
- 在服务端应该除了静态资源外都返回单页应用的index

#### Vue的构建版本

- 运行时版本：不支持template模板，需要打包的时候提前编译
- 完整版：包含运行时和编译器，体积比运行时版大10k左右，程序运行的时候把模板转换成render函数



## Vue.js响应式原理

#### 数据驱动

数据响应式、双向绑定、数据驱动

**1. 数据响应式**

-   数据模型仅仅是普通的JavaScript对象，而当我们修改数据时，视图会进行更新，避免了繁琐的DOM操作，提高开发效率

**2. 双向绑定**  

- 数据改变，视图改变；视图改变，数据也随着改变
- 我们可以使用v-model在表单元素上创建数据双向绑定

**3. 数据驱动是Vue最独特的特性之一**

- 开发过程中仅需要关注数据本身，不需要关心数据是如何渲染到视图



#### 响应式的核心原理

**vue2.0X**

- 当你把一个普通的JavaScript对象传入Vue实例作为`data`选项，Vue将遍历此对象所有的`property`，并使用`Object.defineProperty`把这些`property`全部转为`getter/setter`
- `Object.defineProperty`是ES5中一个无法shim的特性，这也就是Vue不支持IE8以及更低版本浏览器的原

**vue3.0X**

-  当我们从一个组件的 `data` 函数中返回一个普通的 JavaScript 对象时，Vue 会将该对象包裹在一个带有 `get` 和 `set` 处理程序的 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 中 
-  `Proxy` 是在 ES6 中引入的，它使 Vue 3 避免了 Vue 早期版本中存在的一些响应性问题。 
- `Proxy` IE 不支持， 性能由浏览器优化



#### 发布订阅模式和观察者模式

##### 发布订阅模式

- 发布/订阅模式

  1. 订阅者
  2. 发布者
  3. 信号中心

  我们假定，存在一个“信号中心”， 某个任务执行完成，就向信号中心”发布“（pushlish)一个信号，其它任务可以向信号中心”订阅“（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫”发布/订阅模式“（pushlish-subscribe pattern）

- Vue的自定义事件

##### 观察者模式

- 观察者（订阅者）--Watcher

  `update()`：当事件发生时，具体要做的事情

- 目标（发布者）--Dep

  `subs`数组： 储存所以的观察者

  `addSub()`：添加观察者

  `notify()` ：当事件发生，调用所以观察者的update() 方法

- 没有事件中心

**总结：**

- 观察者模式是由具体目标调度，比如当事件触发，Dep就会去调用观察者的方法，所以观察者模式的订阅者与发布者之间是存在依赖的
- 发布/订阅模式由统一调度中心调用，因此发布者和订阅者不需要知道对方的存在

![1656386713441](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656386713441.png)



#### Vue响应式原理模拟

![1656400369193](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656400369193.png)



##### Vue

  把data中的成员注入到Vue实例，并且把data中的成员转换成getter/setter

 **功能**

- 负责接收初始化的参数（选项）
- 负责把data中的属性注入到Vue实例，转换成getter/setter
- 负责调用observer监听data中所有属性的变化
- 负责调用compiler解析指令/差值表达式

  **结构**

![1656400717893](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656400717893.png)



##### Observer

**功能**

- 负责把data选项中的属性转换成响应式数据
- data中的某个属性也是对象，把该属性转换成响应式数据
- 数据变化发送通知

**结构**

![1656412640892](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656412640892.png)



##### Compiler

**功能**

- 负责编译模板，解析指令/差值表达式
- 负责页面的2首次渲染
- 当数据变化后重新渲染视图

**结构**

![1656414605560](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656414605560.png)



##### Dep（Dependency）

**功能**

- 收集依赖，添加观察者（watcher）
- 通知所以观察者

![1656416910407](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656416910407.png)

**结构**

![1656417000294](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656417000294.png)



##### Watcher

![1656417685943](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656417685943.png)

**功能**

- 当数据变化触发依赖，dep通知所有的Watcher实例更新视图
- 自身实例化的时候往dep对象中添加自己

**结构**

![1656418331191](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656418331191.png)



##### **总结**

整体流程

![1656504539346](C:\Users\bottle\AppData\Roaming\Typora\typora-user-images\1656504539346.png)

