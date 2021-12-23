const list = document.getElementById('list')
const lis = document.getElementsByTagName('li')
const realLis = Array.prototype.slice.call(lis)
const btn = document.getElementById('btn')

function addEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}

//循环每个li，并绑定click事件。
//缺陷：通过click按钮新增的li没有绑定
//     且每个li做一次绑定耗性能
// realLis.forEach(element => {
//     addEvent(element,'click',()=>{
//         alert(element.innerHTML)
//     })
// });

//通过事件冒泡的机制
addEvent(list,'click',(e)=>{
    const target = e.target;
    if(target.nodeName === 'LI') alert(target.innerHTML);
})

btn.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.innerHTML = '新增一项'
    list.insertBefore(li,btn)
})

// console.log(realLis);