# 复仇者联盟终极之战，你猜哪些英雄会死？

**[记英雄游戏](https://fogsail.github.io/memory-card/index.html)**

## 项目说明：
这是一个用Javascript, HTML, CSS完成的一个小型游戏。
您可以在网页上在线辨认英雄，也可以下载至本地。

**[在线玩](https://fogsail.github.io/memory-card/index.html)**

**下载至本地：**
``sh
git clone https://github.com/fogsail/memory-card.git
``

## 项目开发的基本逻辑：

### 1、全局变量:

```
let moves = 0;
let movesCounter = document.querySelector(".moves");
// timer:
let second = 0, minute = 0, hour = 0;
let timer = document.querySelector(".timer");
let interval;
```

用来记录走的步数和所花费的时间，用来评价玩家的最终成绩。
其中startTimer()用来设置当前时间，而步数的变化我们通过监听鼠标点击这个事件来进行move++，确定最终步数。

### 2、创建卡片；
依次创建16张卡片：基本的思路是将卡片全部保存在一个cardsArr数组中
我们遍历这个数组，依次为每一张卡片创建一个div

每一个div保存两个子div，分别是front和back， 表示卡片的前后


### 3、卡片创建完成之后，我们主要分为两步骤：
一是判断第一次click和第二次clik是否点击的是同一张卡片？
如果是，就全部翻面，同时改变卡片的状态

二是判断什么时候游戏结束？

**这两者的处理方法可以统一起来**
**通过class类的变化，来判断。**
如果匹配，就在card上
```
card.classList.add("match");
```

这样如果匹配过的就多了一个match标签，最后统计match标签数达到16，游戏结束

同理，判断第一次click和第二次click是否为同一张卡片？
也是用**class marker!**
通过class标签来判断
```
select card and set class mark
if is the same
	match two card
else 
	clean the class mark
```

具体的实现方式参见
```
grid.addEventListener("click", function(event) {
	//
});
```


### 4、最后处理一些重新玩的细节就可以了

## How do I contribute?

对项目提出改进意见的每一个人，我都表示由衷的感谢
具体见[Contributing](./CONTRIBUTING.md)


欢迎您和我交流
我的个人站点是：www.fogsail.net



