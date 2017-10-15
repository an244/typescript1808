console.log('Hello');

function sayHello(name: string){
    console.log('Xin chao '+name);
}

sayHello('An');

let age: number = 10;
age = 100;

console.log(age);

const sayHello2 = (name: string): string => 'xin chao '+ name;

console.log(sayHello2('Thien'));