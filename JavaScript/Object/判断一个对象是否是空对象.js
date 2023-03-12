let obj = {}

let obj1 = {
  name: 'jack',
}

let obj2 = {
  [Symbol('name')]: 'jack',
}

let obj3 = Object.defineProperty({}, 'name', {
  value: 'john',
  enumerable: false, // 不可枚举
})

// 方式一 利用for in 循环

function isEmpty(obj) {
  for (let i in Object.keys(obj)) {
    return false // 进入循环即不为空
  }
  return true
}
console.log(isEmpty(obj)) // true
console.log(isEmpty(obj1)) // false
console.log(isEmpty(obj2)) // true
console.log(isEmpty(obj3)) // true

// 参考： 博客园-冯风风  [JS]判断一个对象是否为空对象[https://www.cnblogs.com/feng-fengfeng/p/12409546.html]
