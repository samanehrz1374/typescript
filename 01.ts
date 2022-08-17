let w: unknown=1;
w="string";
console.log(typeof w)
w={
    runANonExistenMethod:()=>{
        console.log("i think therefore i am");
    }
} as { runANonExistenMethod: ()=>void}

if(typeof w==='object' && w!==null){
    (w as {runANonExistenMethod: Function}).runANonExistenMethod();
}

let names:string[]=[];
names.push("samaneh");

let num=[1,2,3];

let ourtuple:[number,boolean,string];
ourtuple = [5,false,"s"]

const car:{
    type: string,
    model: string,
    year: number
}={
    type:"toyota",
    model:"corolla",
    year:2009
};

console.log(car)

enum cardi{
    North="s",East="ss"
}

let current=cardi.East;
console.log(current);


interface Rectangle{
    height: number,
    width: number
}

interface ColorRectangle extends Rectangle{
    color:string
}

const colorregtangle: ColorRectangle={
    height:20,
    width:10,
    color:"red"
};

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);


function getTime():void{
    console.log('hello');
}

console.log(getTime())


function multiply(a:number,b?:number){
    return a*(b||0);
}

console.log(multiply(1))

function divide({dividend,divisor}:{dividend:number,divisor:number}){
    return dividend/divisor;
}
console.log(divide({dividend:10,divisor:2}))

function add(a:number,b:number,...rest:number[]){
    return a+b+rest.reduce((p,c)=>p+c,0);
}

console.log(add(3,5,3,5))


type Nagate = (value: number)=> number;
const nagete:Nagate=(value)=>value *-1;
console.log(nagete(10));


var x:unknown="hello";

console.log((<string>x).length);


class Person{
    private name:string;
    public constructor(name:string){
        this.name =name;
    }
    public getname():string{
        return this.name;
    }
}

const person = new Person('Jane');
console.log(person.getname());


class Person1{
    public readonly name:string;
    public constructor(name:string){
        this.name=name;
    }
    public getname(): string{
        return this.name;
    }
}

const person1= new Person1("jane");


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

abstract class polygon{
    public abstract getArea():number;
    public toString():string{
        return `polygon[area=${this.getArea()}]`;
    }
}

class Rectangle extends polygon{
    public constructor(protected readonly width:number,protected readonly height:number){
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

const myrect = new Rectangle(10,20);
console.log(myrect.getArea());







// const myarea= new Square(20);

// console.log(myarea.toString());



function identity<T>(arg:T):T{
    return arg;
}
console.log(identity<number>(1))


class Queue<T>{
    private data: T[]=[];

    push(item:T){
        this.data.push(item);
    }
    pop():T | undefined{
        return this.data.shift();
    }
}

class  NamedValue<T=string>{
    private _value: T | undefined;
    constructor(private name:string){}
        /**
         * setValue
         */
        public setValue(value:T) {
            this._value =value;
            
        }
        /**
         * getValue
         */
        public getValue():T | undefined {
            return this._value;
            
        }

        public toString():string{
            return `${this.name}:${this._value}`;
        }
    }


let value =new NamedValue<number>('mynumber');
value.setValue(10);
console.log(value.toString());

type s=string;
let s=1;

type Wrapped<T>={value:T};
const WrappedValue: Wrapped<number>={value:10}

interface Wrappedd<T>{
    width:T,
    height:T

}

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }

  createLoggedPair(1,2)


interface Point{
    x:number;
    y:number;
}
let pointPart: Record<string,number>={
    'x':10,
    'y':10
};
pointPart.x=10;
pointPart.y=10;

console.log(pointPart)

interface Person2{
    name:string;
    age:number;
    location?:string;
}

const bob: Omit<Person2,'age'|'loacation'>={
    name:'Bob'
};

interface Person3{
    name:string;
    age:number;
    location?:string;
}

const bob2:Pick<Person3,'name'>={
    name:'Bob'
}

console.log(typeof bob2)

type primitive = string |number|boolean;
const value1: Exclude<primitive,number>="s";
console.log(typeof value1)


type pointgenerator = () =>{ x:number;y:number;};
const point:ReturnType<pointgenerator>={
    x:10,y:2
};

type pointprinter =(p:{ x: number; y:number;})=>void;
const point1: Parameters<pointprinter>[0]={
    x:10,
    y:20
};
console.log(point1)