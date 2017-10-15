// function getTotalLength(a:{length: number}, b: {length: number}){
//     return a.length + b.length
// }

//co the viet lai nhu sau:
interface HaveLength {
    length: number;
}

function getTotalLength(a: HaveLength, b: HaveLength){

}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let a: any = 'abcd';
//<string> là để thông báo với TS trong trg hợp này a là chuỗi
//và 'a' sẽ có toàn bộ thuộc tính của chuỗi.
console.log((<string> a).length);


interface Point {
    x: number;
    y: number;
}

let ab: Point = {x:10, y: 10};


//cach 1:
function callSomething(obj: any){
    console.log('This is '+ obj.name)
}

callSomething({name: 'Table'});

//cach 2:
function callSomething2(obj: {name: string}){
    console.log('This is '+ obj.name)
}

callSomething2({name: 'Table'});

//cach 3:
interface HasName{
    name: string;
}
function callSomething3(obj: HasName){
    console.log('This is '+ obj.name)
}

callSomething3({name: 'Table'});

/////////

interface HasNme {
    nme: string;
}

//class nay fai co nme: string;
class Animal implements HasNme {
    nme: string;
   private _age: number;
    constructor(nme: string, age: number){
        this.nme = nme;
        this._age = age;
    }

    get ageA(){
       return this._age; 
    }
}


function callSomething4(obj: HasNme){
    console.log('This is '+ obj.nme)
}

const conBo = new Animal('Kobe1',10);

callSomething4(conBo);
console.log(conBo.ageA);

//////////
interface HasName2{
    lastname: string;
    firstname?: string;//co hay ko co deu dc
}
const AnT: HasName2 = {lastname: 'An'};

//generic
function getTotal(a: number, b: number): Promise<number>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const isNumber = typeof a === 'number'&& typeof b=== 'number';
            if(!isNumber) return reject(new Error('Type error'));
            resolve(a+b);
        })
    });
}

//enum
enum Huong {Dong, Tay, Nam, Bac};

class Nha {
    huong: Huong;
}

const n1 = new Nha();
n1.huong = Huong.Bac;

//fn
let fn: (num: number)=> number;
fn = ()=> 123;