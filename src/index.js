// require('./index.css');
import '@babel/polyfill';

// import * as fn from './public/common.js';



// class Fn{
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }
// }


// const xiaoMing = new Fn('小明',18);

console.log('1');
new Promise(function(resolve,reject) {
  setTimeout(function(){
    resolve('完成')
  }, 1000);
}).then(function(res){
  console.log(res,'res');
})

var a = new Map();

console.log(a);
console.log(22);