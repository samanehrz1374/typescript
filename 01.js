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
    setValue(value) {
        this._value = value;
    }
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
function printpersonpropery(person, property) {
    console.log(`printng person peoperty ${property}:"${property}"`);
}
let person3 = {
    name: "max",
    age: 27
};
printpersonpropery(person3, "name");
function creatstring(property, value) {
    return { [property]: value };
}
const s1 = creatstring("a", "s");
console.log(s1);
let value2 = null;
value2 = 'hello';
console.log(typeof value2);
value2 = undefined;
console.log(typeof value2);
function printYardSize(house) {
    var _a;
    const yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('no yard');
    }
    else {
        console.log(`Yard is ${yardSize}`);
    }
}
let home = {
    sqft: 500
};
printYardSize(home);
function printMilleage(mileage) {
    console.log(`Mileage: ${mileage !== null && mileage !== void 0 ? mileage : 'Not avalable'}`);
}
printMilleage(1);
const person4 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'cooking']
};
const person5 = {
    name: "samaneh",
    family: "rezaie",
    mark: [1, 2]
};
console.log(person5.name);
let fa;
fa = ["a", "b", "c"];
for (let i of fa) {
    console.log(i);
}
function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(1, "s"));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// function printresult(num1:number):void{
//     console.log("result:" + num1);
// }
// let combineValue:(a:number,b:number) => number;
// combineValue=add;
// console.log(combineValue(2,3))
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// const home1=new Department("yas")
// home1.name="s"
// // home1.addEmployee('Max');
// home1.describe()
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id);
        this.admins = admins;
    }
}
const accounting = new ITDepartment('d1', ['max']);
console.log(accounting);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id);
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
}
class childaccounting extends AccountingDepartment {
    addReport(text) {
        return "hello";
    }
}
const accounting2 = new childaccounting('s', ['s']);
console.log(accounting2.addReport("d"));
const accounting1 = new AccountingDepartment('d1', ['max']);
accounting1.addReport("s");
console.log(accounting1);
class accounts extends Department {
    constructor(id, reports, lastReport) {
        super(id);
        this.reports = reports;
        this.lastReport = lastReport;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
}
const accounting3 = new accounts('d1', ['max'], " ");
console.log(accounting3.mostRecentReport);
