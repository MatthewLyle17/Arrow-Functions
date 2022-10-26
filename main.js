//Q1
let greet = (name) => "Hey" + name + "!";
console.log(greet("Luna"));

//Q2
let isEven = (num) => num%2 === 0
num = 3;
console.log(isEven(num));

num = 2;
console.log(isEven(num));

//Q3
let counterFunc = (counter) => {
    if (counter > 100) {
        counter = 0
    } else {
        counter++;
    }
    return counter;
}

counter = 1;
console.log(counterFunc(counter));

//Q4
let nameAge = (name, age) => console.log("Hello " + name + " you are " + age + " years old");
nameAge("Matthew", 22);

//Q5
let printOnly = () => console.log("printing");
printOnly();

//Q6
let sum = (num1, num2) => num1 + num2;
num1 = 2;
num2 = 3;
console.log(sum(num1, num2));