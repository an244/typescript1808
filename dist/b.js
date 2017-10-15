"use strict";
// function getTotalLength(a:{length: number}, b: {length: number}){
//     return a.length + b.length
// }
function getTotalLength(a, b) {
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let a = 'abcd';
//<string> là để thông báo với TS trong trg hợp này a là chuỗi
//và 'a' sẽ có toàn bộ thuộc tính của chuỗi.
console.log(a.length);
let ab = { x: 10, y: 10 };
//cach 1:
function callSomething(obj) {
    console.log('This is ' + obj.name);
}
callSomething({ name: 'Table' });
//cach 2:
function callSomething2(obj) {
    console.log('This is ' + obj.name);
}
callSomething2({ name: 'Table' });
function callSomething3(obj) {
    console.log('This is ' + obj.name);
}
callSomething3({ name: 'Table' });
//class nay fai co nme: string;
class Animal {
    constructor(nme, age) {
        this.nme = nme;
        this._age = age;
    }
    get ageA() {
        return this._age;
    }
}
function callSomething4(obj) {
    console.log('This is ' + obj.nme);
}
const conBo = new Animal('Kobe1', 10);
callSomething4(conBo);
console.log(conBo.ageA);
const AnT = { lastname: 'An' };
//generic
function getTotal(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a === 'number' && typeof b === 'number';
            if (!isNumber)
                return reject(new Error('Type error'));
            resolve(a + b);
        });
    });
}
