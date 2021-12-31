var i=0;

function timedCount()
{
    i += 1;
    if(i==5){
       throw new Error('我是子线程，当前值过高'+i);
    }
    postMessage(i);
    setTimeout("timedCount()",1000);
}

timedCount();