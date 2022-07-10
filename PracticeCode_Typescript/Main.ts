// string
let car:string = "HYUNDAI";
console.log(car);
car = "KIA"
console.log(car);

// int
let age: number = 35;
console.log(age);

// boolean
let isAdult:boolean = true;
console.log(isAdult);

// array
let a1: number[] = [1, 2, 3];
let a2: Array<string> = ['four', 'five', 'six'];
console.log(a1, a2);

// 튜플 (Tuple)
let b: [string, number] = ['abc', 1];
console.log(b[0]);
console.log(b[1]);

// 함수 void
function showError() {
    console.log("Call function")
}
showError();

// enum 열거형
enum Person {
    Name = "LeeDongKyoo",
    Age = 35,
    Job = "Programmer"
}
console.log(Person.Name, Person.Age, Person.Job);
console.log(Person["LeeDongKyoo"], Person[35], Person["Programmer"]);

// enum 열거형 전달
let Person1: Person;
Person1 = Person.Name;
console.log(Person1);

// null
let a: null = null;
console.log(a);



function printSentence() {
    console.log("Using setTimeout()")
}
setTimeout(printSentence, 2000)