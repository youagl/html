function loadImg(src){
    //1.定义promise类，创建图片标签
    //2.把地址给图片
    //3.定义成功onload和失败onerror的方法

    const promise = new Promise((resolve,reject)=>{
        const img = document.getElementsByTagName('img');
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            const error = new Error(`图片加载失败,url：${src}`);
            reject(error)
        }
        img.src = src;
    })
    return promise;
}

// https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg
const src = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg';
loadImg(src).then(img=>{
    console.log(`加载成功！${img}`);
}).catch(e=>{
    console.log(e);
})