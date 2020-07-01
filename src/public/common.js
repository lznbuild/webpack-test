

export function fn1() {
console.log(111);}


export function fn2(x) {
  return x.a
} 


fn2({ a: 123 });

export default {
  fn1,
  fn2
}