// Functin declaration
function greet(){
    console.log("Hello Enid");
}
// call funtion 
greet()

// function expressions
const speak = function(){
    console.log("How are you doing?");
}
speak()

// Hoisting -function are declared before the rest of our javascript
// Hoisting works with fuction declarations but it doesnt work with function expressions 
Hello()
function Hello(){
    console.log("Hello");
}

//
const love = function(you){
    console.log(`Good morning bebe.I hope you arrived well.Have a blessed day.I love you ${you}`);
}
love("hubby")

const hobbies = function(life,family){
    console.log(`I love  ${life} and ${family}.`);
}
hobbies("cooking", "swimming")


const housechores = function(life="mopping",family="Washing dishes"){
    console.log(`I love  ${life} and ${family}.`);
}
housechores()

// const calcArea = function(radius){
//     return 3.14 * radius**2
// }
// const area = calcArea(5)
// console.log(area)


// Arrow functions
// const calcArea =(radius)=>{
//     return 3.14 * radius**2
// }
const calcArea = radius => 3.14*radius**2 
const area = calcArea(5)
console.log(area)
const greetings = () =>"Hello, world"
const results = greetings()
console.log(results)

const bill = (products,tax)=>{
    let total = 0;
    for(let i = 0;
        i < products.length;
        i++){
            total += products[i] + products[i] *tax;
        }return total
}
// const result = bill([10,15,20],0.2)
console.log(bill([10,15,20],0.2))

// Methods used in functions
const jina = () => "Enid Nyatichi"
let resul = jina()
console.log(resul.toUpperCase())

// Callback functions-calling a funcion within a function
const myFunc = (callbackFun)=>{
    let name = "Norbert Maosa"
    callbackFun(name)

}
myFunc(name=>{
    console.log(name)
})
// Array Methods
let family = ["Maosa", "Mum", "Marube","Moraa"]
family.forEach(function(fam){
    console.log(fam)
})