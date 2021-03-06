const ullist = document.getElementById('ullist')
const lis = document.getElementsByTagName('li')[0];
/**
    elem：父节点元素
    type：事件类型
    selector：目标元素
    cb：事件处理回调函数
 */
function addEvent(elem,type,selector,cb){

    console.log(cb);

    //1.如果fn为空，则selector赋值给fn
    if(cb == null){
        cb = selector;
        selector = null;
    }
    //2.给元素绑定事件监听 
    elem.addEventListener(type,(event)=>{
        const target = event.target;
        console.log('target'+JSON.stringify(event));
        //分两种情况：包含selector和不包含selector 
        if(selector){
            if(target.matches(selector)){
                cb.call(target, event);
            }
        }else{
            // cb()
            cb.call(target, event);
        }
    })
}

//踩坑：用箭头函数会导致this的指向改变
// 这里传this.innerHTML，封装函数里使用call来改变指向
// 这里传e.target.innerHTML，封装函数里直接调用cb()
addEvent(lis,'click',function(e){
    alert(this.innerHTML);
})

addEvent(ullist,'click','li',(e)=>{
    alert(e.target.innerHTML);
})
