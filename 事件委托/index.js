const ullist = document.getElementById('ullist')
const lis = document.getElementsByTagName('li')
const realLis = Array.prototype.slice.call(lis)
const btn = document.getElementById('btn')

//循环每个li，并绑定click事件。
//缺陷：通过click按钮新增的li没有绑定
//     且每个li做一次绑定耗性能
// realLis.forEach(element => {
//     addEvent(element,'click',()=>{
//         alert(element.innerHTML)
//     })
// });

//通过事件冒泡的机制
// 给ul绑定事件处理函数，设置到每个li子节点
addEvent(ullist,'click',(e)=>{
    const target = e.target;
    if(target.nodeName === 'LI') alert(target.innerHTML);
})
// 点击“新增”按钮，动态添加li
btn.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.innerHTML = '新增一项'
    ullist.insertBefore(li,btn)
})

// 事件绑定抽离出单独的函数
function addEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}

// 阻止默认事件 preventDefault 对应Vue事件修饰符 .prevent
// 比如a链接的默认事件是link跳转，checkbox的默认属性是checked选中
// 加了event.preventDefault()后，默认事件将失效。但后面的代码依然会执行，不会阻断。
const link = document.getElementById('link');

addEvent(link,'click',(event)=>{
    event.preventDefault();
    alert('我是跳转的链接')
})

const check = document.getElementById('check1');
addEvent(check,'click',(event)=>{
    event.preventDefault();
    alert('你的鼠标戳到我冰凉的脑袋壳啦');
})

// 阻止事件冒泡 stopPropagation 对应Vue事件修饰符 .stop
// 阻止事件冒泡，自下而上，由确定的元素向不确定的元素传递
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
addEvent(div1,'click',event=>{
    event.stopPropagation();
})
