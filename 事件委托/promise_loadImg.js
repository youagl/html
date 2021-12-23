function loadImg(src){
    //1.定义promise类，创建图片标签
    //2.把地址给图片
    //3.定义成功onload和失败onerror的方法

    const promise = new Promise((resolve,reject)=>{
        // const img = document.getElementsByTagName('img');
        let img = new Image();
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
let url1 = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3293635140,3955114282&fm=26&gp=0.jpg"
let url2 = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1019333328,1858047370&fm=26&gp=0.jpg"
let url3 = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4226468334,723383513&fm=26&gp=0.jpg"
loadImg(url1).then(img=>{
    console.log(`加载成功！${img}`);
    return loadImg(url2);
}).then(img=>{
    console.log(`加载成功！${img}`);
    return loadImg(url3);
}).then(img=>{
    console.log(`加载成功！${img}`);
})
.catch(e=>{
    console.log(e);
})