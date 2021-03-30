let apple:number = 5;

let speed:string ='low';
let hasName:boolean=false;

let nothing:null=null;
let und:undefined=undefined;

//build in object
let now:Date = new Date();

//Array
let colors: string[]= ['red', 'green', 'blue'];
let myNumbers: number[]=[1,2,3,4];
let truth: boolean[]=[true, true, false];

//Classes
class Car{

}

let car:Car=new Car();

//Object literal
let point:{x:number; y:number} ={
    x:10,
    y:2
};

// Function
const logNumber:(i:number)=>void = (i:number)=>{
    console.log(i);
}

//when to use annotation
// 1) function that returns the 'any' type

const json ='{"x":10,"y":3}';
const coordinates :{x:number; y:number} =JSON.parse(json);
console.log(coordinates); //{x:10,y:3}

//2) when we declare variable in one line and initialize it later
let words: string[]= ['red', 'green', 'blue'];
let foundWord:boolean;

for (let i=0; i<words.length; i++){
    if(words[i]==='green'){
        foundWord=true;
    }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10,5,45];
let numberAboveZero: boolean|number=false;

for (let i=0; i<numbers.length; i++){
    if(numbers[i]>0){
        numberAboveZero=numbers[i];
    }
}