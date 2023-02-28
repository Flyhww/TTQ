## CSS系列

### rem 和 em 的区别？

**rem:** 根据html根节点来计算的

**em:** 根据父级元素的字体大小计算的





### CSS预编译语言有哪些？区别是什么？

- less
- sass
- stylus

特性：

- 变量：less用@符号声明变量；sass用$符号声明变量；stylus不需要符号声明变量

  ​           less和sass变量与值之间用:号；stylus变量与值之间用=号

- 作用域：sass不存在全局变量

- 混入（Mixins)：可以在Mixins中设置参数

- 嵌套： less需要用{}包裹，sass和stylus可以不需要{}包裹

- 模块化





## JavaScript系列

### 闭包3

- **闭包是指有权访问另一个函数作用域中变量的函数**，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。
- 可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员
- 闭包的本质：函数在执行的时候会放到一个执行栈上当函数执行完毕之后会从执行栈移除，但是堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以访问外部函数的成员
- 闭包的好处：延长了外部函数的作用范围
- 闭包有两个常用的用途：
  1. 在函数外部能够访问到函数内部的变量。
  2. 使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。



### 作用域

作用域：即变量和函数生效（能被访问）的区域或集合

作用域分为：

- 全局作用域
- 函数作用域
- 块级作用域



### 柯里化（currying)

- 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）
- 然后返回一个新的函数接收剩余的参数，返回结果

**lodash中的柯里化函数**

 柯里化是把一个多参数函数转化成一个嵌套的一元函数的过程 

- 功能：创建一个函数，该函数接收一个或多个func的函数，如果func所需要的参数都被提供则执行func并返回执行的结果。否则继续返回函数并等待接收剩余的参数。
- 参数：需要柯里化的函数
- 返回值：柯里化后的函数



### 原型和原型链

怎么获取一个对象的原型？

Object.getPrototypeOf

原型：每个函数都有一个特殊的属性叫做原型`prototype`

原项链：原型对象也可能拥有原型，并从中继承方法和属性，一层一层，以此类推。这种关系被称为原项链

总结：

- 一切对象都是继承`Object`对象，`Object`对象直接继承根源对象null
- 一切函数对象（包括`Object`对象），都是继承`Function`对象
- `Function`对象的`__proto__`会指向自己的原型对象，最终还是继承`Object`对象



### 深拷贝和浅拷贝的区别？

**浅拷贝**：如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是引用类型的地址

即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址。

**实现方式：**

- Object.assign
- concat
- slice
- 拓展运算符（...）

**深拷贝**：深拷贝是开辟一个新的栈，两个对象属性完全想相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

**实现方式：**

- JSON.stringify()
- _.clonrDeep
- jQuery.extend
- 手写循环递归



### 赋值与深浅拷贝的区别

**赋值：**

- 基本类型：赋值后两个数据互不影响
- 引用数据类型：赋址，两个变量指向同一个地址，同一个对象，相互之间有影响

**浅拷贝：**
- 基本类型：值不会被改变
- 引用数据类型：值会跟随改变

**深拷贝：**
- 两个对象互不影响

传送门：https://juejin.cn/post/6844903941629542408





### setTimeout 和 setInterval 的区别

- setTimeout: **只执行一次**，在指定时间内延迟执行函数或表达式，执行过后便会停止
- setInterval: **重复执行**，重复调用一个函数或执行一个代码块，在每次调用之间具有固定的时间延迟


### 数组方法

| 数组分类/标准 | 改变自身方法                                     | 不改变自身方法                                               | 遍历方法（不改变自身）                                  |
| ------------- | ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| ES5及以前     | pop、push、reverse、shift、sort、splice、unshift | concat、join、slice、toString、toLocateString、indexOf、lastIndexOf | forEach、every、some、map、filiter、reduce、reduceRight |
| ES6/7/8       | copyWithin、fill                                 | includes、toSource                                           | entries、find、findIndex、keys、values                  |



### 判断数组的方式有哪些？

- Object.prototype.toString.call()

```
Object.prototype.toString.call(obj).slice(8,-1) === 'Array'
```

- 原型链

```
obj.__proto__ === Array.prototype
```

- ES6的Array.isArray()

```
Array.isArrray(obj)
```

- instanceof

```
obj instanceof Array
```

- Array.prototype.isPrototypeOf

```
Array.prototype.isPrototypeOf(obj)
```



### 数组去重的方式有哪些？

```
 let arr = [1, 2, 2, 3, 3, 4, 5, 5, 6,]
```

- 利用Set()+Array.from()

  `Set`对象：是**值的集合**，你可以按照插入的顺序**迭代**它的元素。 Set中的元素只会**出现一次**，即Set中的**元素是唯一的**。

  `Array.from()` 方法：对一个**类似数组**或**可迭代对象**创建一个新的，浅拷贝的数组实例。

  ```
  console.log(Array.from(new Set(arr)))
  ```

- 利用两层循环+数组的splice方法

  此方法对NaN是无法进行去重的，因为进行比较时`NaN !== NaN`。

  ```
    function forArr () {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
          if (arr[i] === arr[j]) {
            arr.splice(j, 1)
            j--
          }
        }
      }
    }
  ```

- 利用数组的indexOf方法

  indexOf() 方法：返回调用它的String对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。

  ```
    function indexOfArr() {
      let newArr = []
      arr.forEach(i => {
        if (newArr.indexOf(i) === -1) {
          newArr.push(i)
        }
      })
      console.log(newArr)
    }
  ```

- 利用数组的includes方法

  includes()方法：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false。

  ```
    function includesArr () {
      let newArr = []
      arr.forEach(i => {
        if (!newArr.includes(i)) {
          newArr.push(i)
        }
      })
      console.log(newArr)
    }
  ```

- 利用数组的filter()+indexOf()

  filter方法会对满足条件的元素存放到一个新数组中，结合indexOf方法进行判断

  ```
    function filterIndexOfArr() {
      return arr.filter((i, index) => {
        return arr.indexOf(i) === index
      })
    }
    let result = filterIndexOfArr()
    console.log(result)
  ```

- 利用Map()

  Map对象是JavaScript提供的一种数据结构，结构为键值对形式，将数组元素作为map的键存入，然后结合`has()`和`set()`方法判断键是否重复。

  ```
    function mapArr() {
      const map = new Map()
      const newArr = []
      arr.forEach(i => {
        if (!map.has(i)) {   // has()用于判断map是否包为i的属性值
          map.set(i, true)   // 使用set()将i设置到map中，并设置其属性值为true
          newArr.push(i)
        }
      })
      return newArr
    }
    let result = mapArr()
    console.log(result)
  ```

- 利用对象 

  主要是利用了对象的属性名不可重复这一特性。

  ```
    function objArr() {
      let newArr = []
      let obj = {}
      arr.forEach(i => {
        if (!obj[i]) {
          newArr.push(i)
          obj[i] = true
        }
      })
      console.log(newArr)
    }
  ```

  



### 如何判断一个对象是空对象？

- 使用JSON自带的.stringify方法来判断：

```
if(Json.stringify(Obj) == '{}' ){
    console.log('空对象');
}
```

- 使用ES6新增的方法Object.keys()来判断：

```
if(Object.keys(Obj).length < 0){
    console.log('空对象');
}
```



### forEach和map方法有什么区别？

都是用来遍历数组的，两者区别如下：

- forEach()方法会针对每一个元素执行提供的函数，对数据的操作会改变原数组，该方法没有返回值；
- map()方法不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值；



### 说说New操作符具体干了什么？

- 创建一个新的对象obj
- 将对象和构造函数通过原项链连接起来
- 将构造函数中的this绑定到新建的对象obj中
- 根据构造函数返回类型做判断，如果是原始值则被忽略，如果是返回对象，需要正常处理



### bind、call、apply的区别？

apply： `fn.apply(obj, [1, 2])`

call：`fn.call(obj, 1, 2)`

bind：`let bindFn = fn.bind(obj)；  bindFn(1, 2)`

**小结：** 

- 三者都是改变函数的this指向
- 三者第一个参数都是this要指向的对象，如果没有这个参数，或者参数为`undefind`或`null`，则默认指向全局window
- 三者都可以传参，但`apply`传入的是数组，而`call`是参数列表，并且`apply`和`call`是一次性传入参数，`bind`可以分为多次传入
- `bind`是返回绑定this之后的函数，`call`、`apply`则是立即执行





## Vue系列

### Vue是什么

Vue是一套用于构建用户界面的**渐进式框架**。

### Vue核心特性

**数据驱动(MVVM)**

MVVM表示的是Model-View-ViewModel

- Model：模型层，负责处理业务逻辑以及和服务端进行交互
- View：视图层，负责将数据模型转化为UI展示出来，可以简单理解为HTML页面
- ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁

**组件化**

什么是组件化一句话来说就是把图形、非图形的合种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在Vue中的每一个.Vue文件都可以视为一个组件

组件化的优势：

- 降低整个系统的耦合度
- 调试方便
- 提高可维护性

**指令系统**

指令是带有v-前缀的特殊属性

作用：当表达式的值改变时，将其产生的连带影响，响应式的作用于DOM

常用的指令：

- 条件渲染 v-if
- 列表渲染 v-for
- 属性绑定 v-bind
- 事件绑定 v-on
- 双向数据绑定 v-model
  



### 响应式的核心原理

**vue2.0X**

- 当你把一个普通的JavaScript对象传入Vue实例作为`data`选项，Vue将遍历此对象所有的`property`，并使用`Object.defineProperty`把这些`property`全部转为`getter/setter`
- `Object.defineProperty`是ES5中一个无法shim的特性，这也就是Vue不支持IE8以及更低版本浏览器的原

**vue3.0X**

-  当我们从一个组件的 `data` 函数中返回一个普通的 JavaScript 对象时，Vue 会将该对象包裹在一个带有 `get` 和 `set` 处理程序的 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 中 
-  `Proxy` 是在 ES6 中引入的，它使 Vue 3 避免了 Vue 早期版本中存在的一些响应性问题。 
-  `Proxy` IE 不支持， 性能由浏览器优化



### Vue跟传统开发的区别

- Vue所有的界面事件，都只是操作数据的，Jquery操作DOM
- Vue所有数据的变动，都是根据数据自动绑定出来的，Jquery操作DOM



### Vue和React对比

**相同点**

- 都有组件化思想
- 都支持服务端渲染
- 都有Virtual DOM（虚拟DOM）
- 数据驱动视图
- 都有支持Native的方案： Vue：weex 、React： native
- 都有自己的构建工具：Vue：vue-cli 、React：Create React App

**区别**

- 数据流向不同。React从诞生开始就推崇单向数据流，而Vue是双向数据流
- 数据变化的实现原理不同。React使用的是不可变数据，而Vue使用的是可变数据
- 组件化通信的不同。React中通过使用回调函数来进行通信，而Vue中子组件向父组件传递方式有两种：事件和回调函数
- diff算法不同。React主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。Vue使用双向指针，边对比，边更新DOM



### v-model实现原理

- v-bind 绑定响应数据
- 触发 input 事件并传递数据





### 为什么key 值不建议用index？

- 用 index 作为 key 时，在对数据进行，逆序添加，逆序删除等破坏顺序的操作时，会产生没必要的真实 DOM更新，从而导致效率低
- 用 index 作为 key 时，如果结构中包含输入类的 DOM，会产生错误的 DOM 更新
- 在开发中最好每条数据使用唯一标识固定的数据作为 key，比如后台返回的 ID，手机号，身份证号等唯一值
- 如果不对数据进行逆序添加 逆序删除破坏顺序的操作， 只用于列表展示的话 使用index 作为Key没有毛病





### 一般在哪个生命周期请求异步数据

可以在钩子函数 created、beforeMount、mounted 中调用，因为这三个钩子函数中，data已经创建，可以将服务端返回的数据进行赋值。

推荐在created 钩子函数中调用异步请求，优点：

- 能更快获取服务端数据，减少页面加载时间，用户体验更好
- SSR 不支持 beforeMounted、mounted 钩子函数，放在 created 中有助于一致性



### v-if 和 v-show 的区别

- **v-if**：动态向DOM树内添加或者删除DOM元素，适合条件不大可能改变
- **v-show**：通过设置DOM元素的display属性控制显示隐藏，适合频繁切换



### Computed 和 Watch 的区别

**Computed:**

- 支持缓存，只有数据发生了变化，才会重新计算
- 不支持异步。当Computed中有异步操作时，无法监听数据的变化
- computed的值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的
- 如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用computed
- 如果computed属性的属性值是函数，那么默认使用get方法，函数的返回值就是属性的属性值；在computed中，属性有一个get方法和一个set方法，当数据发生变化时，会调用set方法。

**Watch**：

- 不支持缓存，数据变化时，会触发相应的操作
- 支持异步监听
- 监听的函数接收两个参数，第一个参数是最新的值，第二个是变化之前的值
- 当一个属性发生变化时，就需要执行相应的操作
- 监听数据必须是data中声明的或者父组件传递过来的props中的数据，当发生变化时，会触发其他操作，函数有两个的参数：

- 1. immediate：组件加载立即触发回调函数
  2. deep：深度监听，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化。需要注意的是，deep无法监听到数组和对象内部的变化。

当想要执行异步或者昂贵的操作以响应不断的变化时，就需要使用watch。

**总结：**

- computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。 
- watch 侦听器 : 更多的是**观察**的作用，**无缓存性**，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。 

**运用场景：** 

- 当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。 

- 当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。 

  

### $nextTick 

**理解**：将回调函数延迟在下一次dom更新数据后调用

**应用场景：**

- 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要$nextTick()的回调函数中
- 在vue生命周期中，如果在create()钩子进行DOM操作，也一定要放在nextTick()回调函数中



### slot是什么？有什么作用？

slot又名插槽，是Vue的内容分发机制，组件内部的模板引擎使用slot元素作为承载分发内容的出口。slot又分三类，默认插槽，具名插槽和作用域插槽。

- **默认插槽**：又名匿名插槽，当slot没有指定name属性值的时候一个默认显示插槽，一个组件内只有一个匿名插槽。
- **具名插槽**：带有具体名字的插槽，也就是带有name属性的slot，一个组件可以出现多个具名插槽。
- **作用域插槽**：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。



### 对keep-alive 的理解，如何实现的，具体缓存的是什么？

**使用场景**：在组件切换时，保存组件的状态防止多次渲染

**属性：**

- include：字符串或正则表达式。只有名称匹配的组件会被缓存
- exclude：字符串或正则表达式。任何名称匹配的组件都不会被缓存
- max：数字，最多可以缓存多少组件实例

**注意**：keep-alive 包裹动态组件时，会缓存不活动的组件实例

传送门：https://juejin.cn/post/6844903918313406472



### 组件间通信方式

**父组件给子组件传值**

- 父组件中给子组件绑定自定义事件
- 子组件通过 props 接收数据

**子组件给父组件传值**

- 子组件绑定一个事件，通过 this.$emit() 进行触发

**不相关组件传值**

- 事件总线
- 创建一个 EventBus.js 文件， 暴露一个 vue实例，绑定事件并通过 $emit 触发事件函数，通过 $on 监听回调

**通过 ref 获取子组件**

- 在普通HTML标签上使用 ref，获取到的是DOM
- 在组件标签上使用 ref，获取到的是组件实例



### Vue Router

- 动态路由
- 嵌套路由
- 编程式导航

#### Vue-Router 懒加载的实现

**非懒加载：**

```
import List from '@/components/list.vue'
const router = new VueRouter({
  routes: [
    { path: '/list', component: List }
  ]
})
```

**（1）方案一(常用)：使用箭头函数 + import 动态加载**

```
const List = () => import('@/components/list.vue')
const router = new VueRouter({
  routes: [
    { path: '/list', component: List }
  ]
})
```

**（2）方案二：使用箭头函数 + require 动态加载**

```
const router = new Router({
  routes: [
   {
     path: '/list',
     component: resolve => require(['@/components/list'], resolve)
   }
  ]
})
```

**（3）方案三：使用webpack的require.ensure技术，也可以实现按需加载。 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件**

```
// r就是resolve
const List = r => require.ensure([], () => r(require('@/components/list')), 'list');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
  routes: [
  {
​    path: '/list',
​    component: List,
​    name: 'list'
  }
 ]
}))
```

#### 路由的hash和history模式的区别

**1. hash模式**：

**简介**：hash模式是开发中默认的模式，它的URL带着一个#，例如：http://www.abc.com/#/vue，它的hash值就是`#/vue`

**特点**：hash值会出现在URL里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面。

**原理**：hash模式的主要原理就是**onhashchange()事件**

**2. history模式**：

**简介**：history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理

**特点**： History需要服务器的支持，如果后台没有正确配置，访问时会返回404

**API**： `history.pushState()` 、 `history.replaceState()` 。这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能

#### $route 和 $router 的区别

- **$route**：路由信息对象。有 path、name、params、query 等属性
- **$router**：路由实例。可以通过调用`this.$router.push`、`this.$router.replace`、`this.$router.go `等实现路由跳转

#### params 和 query的区别

- query 要用 path 来引入，params 要用 name 来引入
- query 在浏览器地址栏中显示参数，params 则不显示
- query 刷新不会丢失query里面的数据，params刷新会丢失 params里面的数据

####  Vue-router 路由守卫有哪些

  路由守卫就是路由跳转过程中的一些钩子函数

- 全局前置/钩子：beforeEach、beforeResolve、afterEach
- 路由独享的守卫：beforeEnter( to, from, next)
- 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave



### 什么是Vuex

- Vuex是专门为Vuex.js设计的状态管理库
- Vuex采用集中式的方式储存需要共享的状态
- Vuex的作用是进行状态管理，解决复杂组件通信，数据共享
- Vuex集成到了devtools中，提供了time-travel时光旅行历史回滚功能

#### 什么情况下使用Vuex

- 非必要情况下不使用Vuex
- 大型的单页应用程序
  - 多个视图依赖于同一状态
  - 来自不同视图的行为需要变更同一状态

#### Vuex的核心概念

- State: 数据存储
- Getter：   用于对 Store 中的数据进行加工处理形成新的数据 
- Mutation:   更改Store状态的唯一方法，并且这个过程是同步的 ，通过 commit触发
- Aciton:  处理异步任务，通过dispatch触发
- Module:  将store分割成模块,每个模块都有state、mutation、action、getter、甚至嵌套子模块 



### SPA（单页应用）首屏加载速度慢怎么解决？

**什么是首屏加载：**

首屏时间：指的是浏览器从相应用户输入的网址地址，到首屏内容渲染完成时间，此时整个网页不一定要全部渲染，但需要展示当前视图需要的内容

**加载慢的原因：**

- 网络延时问题
- 资源文件体积过大
- 资源是否重复发送请求加载
- 加载脚本的时候，渲染内容堵塞了

**解决方案：**

- 减小入口文件体积
- 静态资源本地缓存
- UI框架按需加载
- 图片资源压缩
- 组件重复打包
- 开启GZip压缩
- 使用SSR（服务端渲染）



### 对 SSR 的理解

SSR也就是服务端渲染，将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把HTML直接返回给客户端

**SSR的优势：**

- 更好的SEO
- 首屏加载速度更快

**SSR的缺点：**

- 开发条件收到限制，服务端渲染只支持 beforeCreate 和 create 两个钩子
- 当需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境
- 更多的服务端负载







## 性能优化系列

### 浏览器回流与重绘

**回流与重绘的区别？**

- 回流：当DOM的变化影响了元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在正确的位置，这个过程叫做重排。变现为重新生成布局，重新排列元素。
- 重绘：当一个元素的外观发生改变，但没有改变布局，重新把元素外观绘制出来的过程，叫做重绘。变现为某些元素的外观被改变。

重绘不一定出现回流，回流必然会出现重绘

**如何触发回流和重绘？**

**回流：**

- 页面的首次渲
- 浏览器的窗口大小发生变化
- 元素的内容发生变化

- 元素的尺寸或者位置发生变化
- 元素的字体大小发生变化
- 激活CSS伪类
- 查询某些属性或者调用某些方法
- 添加或者删除可见的DOM元素

**重绘：**

- color、background 相关属性：background-color、background-image 等
- outline 相关属性：outline-color、outline-width 、text-decoration
- border-radius、visibility、box-shadow

**如何避免重绘或者回流？**

- 避免频繁操作DOM，操作DOM时，尽量在低层级的DOM节点进行操作
- 不要把DOM节点的属性值放在循环里当成循环里的变量
- 使用CSS的表达式
- 不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式
- 不适用 table 布局。因为可能很小的一个改动会造成整个 table 的重新布局
- 使用 absolute 或者 fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素



### 防抖与节流

- **函数防抖**是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
- **函数节流**是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

**防抖函数的应用场景**：

- 按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次 
- 服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词功能类似⽣存环境请⽤ lodash.debounce 

**节流函数的适⽤场景**：

- 拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动 
- 缩放场景：监控浏览器 resize 
- 动画场景：避免短时间内多次触发动画引起性能问题 



### 如何对项目中的图片进行优化？

- 不用图片。简单的修饰可以用 CSS 代替。
- 使用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。
- 小图使用 base64 格式
- 将多个图标文件整合到一张图片中（雪碧图）
- 选择正确的图片格式
- 图片压缩



### 浏览器的垃圾回收机制

**垃圾回收**：JavaScript代码运行时，需要分配内存空间来储存变量和值。当变量不在参与运行时，就需要系统收回被占用的内存空间，这就是垃圾回收。

**回收机制**：

- Javascript 具有自动垃圾回收机制，会定期对那些不再使用的变量、对象所占用的内存进行释放，原理就是找到不再使用的变量，然后释放掉其占用的内存。
- JavaScript中存在两种变量：局部变量和全局变量。全局变量的生命周期会持续要页面卸载；而局部变量声明在函数中，它的生命周期从函数执行开始，直到函数执行结束，在这个过程中，局部变量会在堆或栈中存储它们的值，当函数执行结束后，这些局部变量不再被使用，它们所占有的空间就会被释放。
- 不过，当局部变量被外部函数使用时，其中一种情况就是闭包，在函数执行结束后，函数外部的变量依然指向函数内部的局部变量，此时局部变量依然在被使用，所以不会回收。

**垃圾回收的方式**：

**1.标记清除**

- 标记清除是浏览器常见的垃圾回收方式，当变量进入执行环境时，就标记这个变量“进入环境”，被标记为“进入环境”的变量是不能被回收的，因为他们正在被使用。当变量离开环境时，就会被标记为“离开环境”，被标记为“离开环境”的变量会被内存释放。
- 垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。然后，它会去掉环境中的变量以及被环境中的变量引用的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。

**2.引用计数**

- 另外一种垃圾回收机制就是引用计数，这个用的相对较少。引用计数就是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减1。当这个引用次数变为0时，说明这个变量已经没有价值，因此，在在机回收期下次再运行时，这个变量所占有的内存空间就会被释放出来。
- 这种方法会引起**循环引用**的问题：例如：` obj1`和`obj2`通过属性进行相互引用，两个对象的引用次数都是2。当使用循环计数时，由于函数执行完后，两个对象都离开作用域，函数执行结束，`obj1`和`obj2`还将会继续存在，因此它们的引用次数永远不会是0，就会引起循环引用。

```
function fun() {
    let obj1 = {};
    let obj2 = {};
    obj1.a = obj2; // obj1 引用 obj2
    obj2.a = obj1; // obj2 引用 obj1
}
```

这种情况下，就要手动释放变量占用的内存：

```
obj1.a =  null
obj2.a =  null
```

**如何减少垃圾回收:**

- **对数组进行优化：**在清空一个数组时，最简单的方法就是给其赋值为[ ]，但是与此同时会创建一个新的空对象，可以将数组的长度设置为0，以此来达到清空数组的目的。
- **对**`object`**进行优化：**对象尽量复用，对于不再使用的对象，就将其设置为null，尽快被回收。
- **对函数进行优化：**在循环中的函数表达式，如果可以复用，尽量放在函数的外面。



### 哪些情况会导致内存泄漏？

- **意外的全局变量：**由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
- **被遗忘的计时器或回调函数：**设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- **脱离 DOM 的引用：**获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
- **闭包：**不合理的使用闭包，从而导致某些变量一直被留在内存当中。





## 小程序系列

### 如何提高微信小程序的应用速度？

**小程序启动加载性能：**

- 控制代码包的大小
- 分包加载
- 首屏体验（预请求，利用缓存，避免白屏，及时反馈）

**小程序渲染性能：**

- 避免不当的使用setData
- 使用自定义组件





### 小程序rpx的理解

不同设备屏幕大小不同，为了实现屏幕的自动适配，rpx把所有设备的屏幕，在宽度上分为750份，（即当前屏幕宽度为750px）。小程序在不同设备上运行时，会自动把rpx的样式单位转换成对于像素单位来渲染，从而实现屏幕适配。



## uni-app系列

### uni-app升级APP

#### 三种方式

- apk包整包更新，需下载所有的文件包含权限模块依赖等，大小在20M+
- wgt包应用资源更新，只更新自己写的代码，根据写代码的多少，大小在600K左右
- wgtu应用资源差量升级，只更新自己写的代码改变的那一小部分，大小在100K左右

#### 场景说明

- **.wgt打包（热更新）**：只有前端资源或者模块进行调整，整个APP结构不发生变化，那只需要更新这一部分资源，避免用户重新下载整个APP。通过HBuilderX打包.wgt包即可
  1. 代码修改完成
  2. 修改mainifest.json中的应用版本名称和应用版本号
  3. 发行
  4. 制作应用wgt包
- **.apk打包（整包更新）**：App发生了非常大的改变，搭建框架发生改变，修改了APP模块配置，权限配置等这些mainifest.json里面的东西，那么就需要apk包整包升级，要求用户覆盖安装
  1. 代码修改完成
  2. 修改mainifest.json中的应用版本名称和应用版本号
  3. 发行
  4. 云打包

备注：安卓比较好实现热更新，uni-app ios暂时无法实现热更新，只能跳转Apple Store下载更新



## HTTP系列

### 在地址栏输入URL敲下回车会发生什么？

- URL解析
- DNS查询
- TCP连接，三次握手
- 发送HTTP请求
- 响应请求
- 页面渲染



### 浏览器存储方式及区别

- cookie
- sessionStorage
- localStorage

**区别**：

- 储存大小：`cookie`数据大小不能超过4K，`sessionStorage`和`loaclStorage`可以达到5或更大
- 存储时间：`localstorage`存储持久数据，浏览器关闭后数据不会丢失，除非主动删除数据；`sessionStorage`数据在当浏览器窗口关闭后自动删除；`cookie`在设置`cookie`过期时间前一直有效，即使窗口或浏览器关闭
- 数据与服务器之间的交互方式：`cookie`的数据会自动传递到服务器，服务器端也可以写`cookie`到客服端；`sessionStorage`和`localStarage`不会自动把数据发送服务器，仅在本地保存



### 浏览器的缓存机制

浏览器与服务器通信的方式为应答模式：浏览器发起HTTP请求 - 服务器响应该请求。那么浏览器第一次向服务器发起请求后拿到请求结果，很根据响应报文中HTTP头的缓存标识，决定是否缓存结果，是则将请求结果和缓存标识存入浏览器缓存中，简单的过程如下图：

![](../img/http.jpg)
由上图可以知道：

- 浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识
- 浏览器每次拿到返回的请求结果都会将该结果和缓存标识存入浏览器缓存中

#### 强缓存

**使用强缓存策略时，如果缓存资源有效，则直接使用缓存资源，不必再向服务器发起请求。**

当浏览器向服务器发起请求时，服务器会将缓存规则放入HTTP响应报文的HTTP头中的请求结果一起返回浏览器，控制强制缓存的字段分别是 `Expires` 和 `Cache-Control`，其中 `Cache-Control` 优先级比 `Expires` 高。

强缓存的情况主要有三种：

1. 不存在该缓存结果和缓存标识，强制缓存失败，则直接向服务器发起请求（跟第一次发起请求一致）。
2. 存在该缓存结果和缓存标识，但该结果已失效，强制缓存失败，则使用协商缓存。
3. 存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果。

#### 协商缓存

**协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。**

同样，协商缓存的标识也是在响应报文的HTTP头中的请求结果一起返回浏览器的，控制协商缓存的字段分别有： `Last-Modified / If-Modified-Since` 和 `Etag / If-None-Match`，其中 `Etag / If-None-Match` 优先级比`Last-Modified / If-Modified-Since` 高。

协商缓存主要有以下两种情况：

1. 协商缓存生效，返回304
2. 协商缓存失效，返回200和请求结果



### 如何解决跨越问题

- **CORS**：CORS需要浏览器和服务器同时支持，整个CORS过程都是浏览器完成的，无需用户参与。因此实现**CORS的关键就是服务器，只要服务器实现了CORS请求**，就可以跨源通信了。

- **JSONP**：jsonp的原理就是利用标签没有跨域限制，通过标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。

  JSONP的缺点：

  - 具有局限性， 仅支持get方法
  - 不安全，可能会遭受XSS攻击

- **postMessage 跨域：**postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：
  - 页面和其打开的新窗口的数据传递
  - 多窗口之间消息传递
  - 页面与嵌套的iframe消息传递
  - 上面三个场景的跨域数据传递
- **nginx代理跨域**：nginx代理跨域，实质和CORS跨域原理一样，通过配置文件设置请求响应头Access-Control-Allow-Origin…等字段。

- **nodejs 中间件代理跨域**：使用node + express + http-proxy-middleware搭建一个proxy服务器。





### 事件循环（Event loop）

js主线程不断地循环往复的从任务队列中读取任务，执行任务，这种运行机制称为事件循环。

浏览器的事件循环分为宏任务和微任务：

**宏任务**： 回调函数、script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲染等。

**微任务**： promise 的回调、async/await、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。





## webpack系列

### webpack的构建流程

- 初始化流程：从配置文件中读取参数和变量，并初始化需要使用的插件和配置等执行环境所需要的参数
- 编译构建流程：从Entry出发，针对每个module串行调用对应的Loader去编译文件内容，再找到该module所依赖的module，递归的进行编译处理
- 输出流程：对编译后的module组合成Chunk，再将Chunk转换成文件，输出到文件系统dist目录



### 如何提高webpack的构建速度？

1. 多入口情况下，使用 CommonsChunkPlugin 来提取公共代码 
2. 通过 externals 配置来提取常⽤库
3. 利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的npm包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。
4. 使⽤ Happypack 实现多线程加速编译 
5. 使⽤ webpack-uglify-parallel 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采⽤了多核并⾏压缩来提升压缩速度
6. 使⽤ Tree-shaking 和 Scope Hoisting 来剔除多余代码 



### 如何提⾼webpack的打包速度**?** 

1. **优化Loader**：优化 Loader 的文件搜索范围、将 Babel 编译过的文件缓存起来

2. **HappyPack**：将 Loader 的同步执行转换为并行的，这样就能充分利用系统资源来加快打包效率了

3. **DllPlugin**：将特定的类库提前打包然后引入。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案

4. **代码压缩**：在 Webpack3 中，一般使用 `UglifyJS` 来压缩代码，但是这个是单线程运行的，为了加快效率，可以使用 `webpack-parallel-uglify-plugin` 来并行运行 `UglifyJS`，从而提高效率。

   在 Webpack4 中，不需要以上这些操作了，只需要将 `mode` 设置为 `production` 就可以默认开启以上功能

5. **其他**



### 如何减少 Webpack 打包体积？

- **按需加载**：将每个路由页面单独打包为一个文件
- **Scope Hoisting**：Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去。
- **Tree Shaking**：可以实现删除项目中未被引用的代码



### 如何⽤webpack来优化前端性能？

- **压缩代码**：删除多余的代码、注释、简化代码的写法等。可以利⽤webpack的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件， 利⽤ cssnano （css-loader?minimize）来压缩css
- **利用CDN加速**：在构建过程中，将引用的静态资源路径修改为CDN上的路径。可以利⽤webpack对于 output 参数和各loader的 publicPath 参数来修改资源路径 
- **Tree Shaking**：将代码中永远不会走到的片段删除。可以通过在启动webpack时追加参数 --optimize-minimize 来实现
- **Code Splitting**：将代码按路由维度或者组件分块（chunk），这样做到按需加载，同时可以充分利用浏览器缓存
- **提取公共第三方库**：SplitChunksPlugin插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码 





