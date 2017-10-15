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