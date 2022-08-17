"use strict";
let w = 1;
w = "string";
console.log(typeof w);
w = {
    runANonExistenMethod: () => {
        console.log("i think therefore i am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistenMethod();
}
let names = [];
names.push("samaneh");
let num = [1, 2, 3];
let ourtuple;
ourtuple = [5, false, "s"];
const car = {
    type: "toyota",
    model: "corolla",
    year: 2009
};
console.log(car);
var cardi;
(function (cardi) {
    cardi["North"] = "s";
    cardi["East"] = "ss";
})(cardi || (cardi = {}));
let current = cardi.East;
console.log(current);
const colorregtangle = {
    height: 20,
    width: 10,
    color: "red"
};
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
function getTime() {
    console.log('hello');
}
console.log(getTime());
function multiply(a, b) {
    return a * (b || 0);
}
console.log(multiply(1));
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add(3, 5, 3, 5));
const nagete = (value) => value * -1;
console.log(nagete(10));
var x = "hello";
console.log(x.length);
class Person {
    constructor(name) {
        this.name = name;
    }
    getname() {
        return this.name;
    }
}
const person = new Person('Jane');
console.log(person.getname());
class Person1 {
    constructor(name) {
        this.name = name;
    }
    getname() {
        return this.name;
    }
}
const person1 = new Person1("jane");
console.log(person1.getname());
// interface Shape{
//     getArea:()=> number;
// }
// class Rectangle implements Shape{
//     public constructor(protected readonly width:number,protected readonly height:number){}
//     public getArea(): number{
//         return this.width * this.height;
//     }
//     public toString():string{
//         return `Rectangle[width=${this.width},height=${this.height}]`;
//     }
// }
// class Square extends Rectangle{
//     public constructor(width:number){
//         super(width,width);
//     }
//     public override toString(): string {
//         return `Square[width=${this.width}]`
//     }
// }
class polygon {
    toString() {
        return `polygon[area=${this.getArea()}]`;
    }
}
class Rectangle extends polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myrect = new Rectangle(10, 20);
console.log(myrect.getArea());
// const myarea= new Square(20);
// console.log(myarea.toString());
function identity(arg) {
    return arg;
}
console.log(identity(1));
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    /**
     * setValue
     */
    setValue(value) {
        this._value = value;
    }
    /**
     * getValue
     */
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}:${this._value}`;
    }
}
let value = new NamedValue('mynumber');
value.setValue(10);
console.log(value.toString());
let s = 1;
const WrappedValue = { value: 10 };
function createLoggedPair(v1, v2) {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
createLoggedPair(1, 2);
let pointPart = {
    'x': 10,
    'y': 10
};
pointPart.x = 10;
pointPart.y = 10;
console.log(pointPart);
const bob = {
    name: 'Bob'
};
const bob2 = {
    name: 'Bob'
};
console.log(typeof bob2);
const value1 = "s";
console.log(typeof value1);
const point = {
    x: 10, y: 2
};
const point1 = {
    x: 10,
    y: 20
};
console.log(point1);
