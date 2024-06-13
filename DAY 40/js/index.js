const name  = {
    firstName: 'john',
    secondName: 'martins',
    age: 34,
};
const person  = {
    furstName: 'john',
    secodName: 'martins',
    age: 34,
}

let posirion = 'SoftwareDirector';
const sweet = ['Apples', 'Mango', 'Oramges', 'Bananas'] 
const varere = [10,20,30,40,50,60,70,80,90]

let nameFirst = "James"
let nameSecond = "john"



// destruction
let [a1,a2,a3,a4,a5] = posirion //String destruction
let{ firstName , secondName } = name; // object destruction 
let { furstName, secodName, country = "us"} = person // adding another object while destructing
let [sweet1,sweet2] = sweet // Array destruction 
let [a,b,...rest] = varere // Array destruction using rest
[nameFirst,nameSecond] = [nameSecond, nameFirst];  // swapping variables

console.log(firstName + " " + secondName);
console.log( furstName, secodName, country);
console.log(a2);
console.log(sweet1 +" "+ sweet2);
console.log(a,b);
console.log(rest);
console.log(nameFirst+ " " + nameSecond);


