const carMakers=['ford','toyota','chevy'];
const dates=[new Date(), new Date()];

const carByMake: string[][]=[];

//helps with inference qhen extracting values
const car1 = carMakers[1];
const myCar=carMakers.pop(); 

//prevent incompatible values
carMakers.push('100');

// helps with 'map'
carMakers.map((car:string):string=>{
    return car;
});

//flexible types

const importantDates:(Date|string)[] = [];
importantDates.push(new Date);
importantDates.push('1212');
//importantDates.push(11);

