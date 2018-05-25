// /*
// function timeout(ms) {
//   return new Promise((resolve)=>{
//     setTimeout(resolve,ms)
//   })
// }
// async function asycnPrint(value,ms){
//   await timeout(ms);
//   console.log(value);
// }
// asycnPrint("hello",50);
// async function timeout(ms){
//   await new Primse((resolve)=>{
//     setTimeout(resolve,ms);
//   })
// }
// async function asyncPrint(value,ms){
//   await timeout(ms);
//
// }
// const foo =async function(){}// 函数表达式
// let obj={async foo(){}}//对象的写法
// obj.foo().then(...)
// //class 的写法
// class  Storage {
//    constructor(){
//      this.cachePromise=caches.open('avaitars')
//    }
//    async getAvatar(){
//      const cache=await this.cachePromise;
//      return cache.match(`/avatars/${name}.jpg`)
//    }
// }
//
// const storage=new Storage();
// storage.getAvatar('jake').then(...);
// // 箭头函数的写法
// const foo =async ()={};
// */



//async 函数返回的是promise对象， async 函数内部return 语句的返回值会成为then方法回调函数的参数
/*async function fP(){
  return 'hello world'
}
fP().then(v=>{
  console.log(v)});*/
//上面代码中 函数f 内部return 的返回之会被 then方法回调函数接收到。
//async函数内部抛出错误，会导致返回的promsie对象变为reject(失败)状态，抛出的错误对象会catch方法回调函数接收到
/*async function f(){
  throw new Error('出错了');
}
f().then(
  v=>console.log(v),
  e=>console.log(e)
);*/
//Promise 对象的状态
//async  函数返回的是一个Promise对象，必须等到内部所有await命令后面Promise对象执行完成，才会发生状态改变，除非遇到return 语句或者抛出错误，也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数
/*
async  function getTitle(url){
  let response =await axios(url);
  let html=await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('')*/

//await 命令
/*

f().then(v=>console.log(v))
//正常情况下 await 命令后面 是一个Promise对象，如果不是，会被转成一个立即resolve的对象Promise对象
async function f() {
  return  await 123;
}
*/

//await 命令后面Promise对象如果变为reject状态那么会被promise的状态会被reject的catch方法的回调函数所接受

async function f(){
  return Promise.reject("啊！！！")
}
f().catch(v=>{
  console.log(v);});


// async 值会被Promise 中的then 方法接受  f().then(v=>{
//   console.log(v);}) 并且返回的时候就会被当作then的回调函数的参数;
// await  后面跟着的是promise对象如果不是会转成立即resolve的Promise对象

