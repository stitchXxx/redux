### redux
Store 
就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。 Redux 提供createStore这个函数，用来生成 Store

Action 
就是 View 发出的通知，表示 State 应该要发生变化 Action 是一个对象。其中的type属性是必须的 { type:"xxxx" }
改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store，封装 action 以函数实现动态的action

Reducer
Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer，Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

redux 原理 （单项数据流）
component----(dispatch)---> actions ----> store ---action&state--> reducers ---change state---> store --- 刷新 component

![image](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

cnpm i redux react-redux -S

### immutable
immutable 深拷贝 修改不可变对象，响应式系统一定检测到数据更改，从而触发视图更新

immutable.js ==> 解决修改对象或者数组，视图不刷新

把对象数组这些可变对象，更新为不可变对象 return {...state}

immutable.js提供了十余种不可变的类型（List，Map，Set，Seq，Collection，Range等）

## API 文档
1. Map() 原生object转Map对象 (只会转换第一层，注意和fromJS区别) immutable.Map({name:'danny', age:18,a:{b:1}})

2. List() 原生array转List对象 (只会转换第一层，注意和fromJS区别) immutable.List([1,2,3,4,5])

3. fromJS() 原生js转immutable对象 (深度转换，会将内部嵌套的对象和数组全部转成immutable) immutable.fromJS([1,2,3,4,5]) //将原生array --> List immutable.fromJS({name:'danny', age:18}) //将原生object --> Map

4. toJS() immutable对象转原生js (深度转换，会将内部嵌套的Map和List全部转换成原生js) immutableData.toJS();

5. 查看List或者map大小
    immutableData.size 或者 immutableData.count()

6. is() 判断两个immutable对象是否相等 immutable.is(imA, imB);

7. merge() 对象合并 
    let imA = immutable.fromJS({a:1,b:2});
    let imB = immutable.fromJS({c:3});
    let imC = imA.merge(imB);
    console.log(imC.toJS()) //{a:1,b:2,c:3}

8. 增删改查（所有操作都会返回新的值，不会修改原来值）

    let immutableData = immutable.fromJS({ a:1, b:2, c: { d: 3 } });
    
    let data1 = immutableData.get('a') // data1 = 1
    
    let data2 = immutableData.getIn(['c', 'd']) // data2 = 3 getIn用于深层结构访问 
    
    let data3 = immutableData.set('a', 2); // data3中的 a = 2 
    
    let data4 = immutableData.setIn(['c', 'd'], 4); //data4中的 d = 4 
    
    let data5 = immutableData.update('a',function(x){return x+4}) //data5中的 a = 5
    
    let data6 = immutableData.updateIn(['c', 'd'],function(x){return x+4}) //data6中的 d = 7 
    
    let data7 = immutableData.delete('a') //data7中的 a 不存在 
    
    let data8 = immutableData.deleteIn(['c', 'd']) //data8中的 d 不存在

immutable.js的优缺点

    优点：降低mutable带来的复杂度，节省内存，拥抱函数式编程
    
    缺点：容易与原生对象混淆，由于api与原生不同，混用的话容易出错
    
为什么要使用immutable

    在Rudux中因为深拷贝对性能的消耗太大了（用到了递归，逐层拷贝每个节点）。
    
    但当你使用immutable数据的时候：只会拷贝你改变的节点，从而达到了节省性能。
    
    总结：immutable的不可变性让纯函数更强大，每次都返回新的immutable的特性让程序员可以对其进行链式操作，用起来更方便。

![image](https://img-blog.csdnimg.cn/img_convert/6fdae931cf4aec5140614f0b99b05c85.gif)

cnpm i immutable redux-immutable -S
