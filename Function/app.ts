import { log } from "console";

// number 리턴 함수
function add(a: number, b: number): number {
    return a + b;
}

// bool 리턴 함수
function isAdult(age: number): boolean {
    return age > 19;
}

// void 리턴 함수
function abs(a: number, b: number): void {
    let res: number;
    res = a - b;
    console.log(res);
}

// 선택적 매개변수에 따라 리턴값이 갈리는 함수
function hello(name?: string): string {
    return `Hello, ${name || "World"}`;
}

// 매개변수와 선택적 매개변수에 따라 리턴값이 갈리는 함수 
function logIn(id: string, pw?: number): void {
    if (pw !== undefined) {
        console.log("Welcome!");
    }
    else {
        console.log("Please, input your pw.");
    }
}

// C#의 params와 비슷한 매개변수를 갖는 함수
function sum(...nums: number[]): number {
    return nums.reduce((result, num) => result + num, 0);
}

// this로 한정하기
interface User {
    name: string;
}

const Sam: User = { name: 'LeeDongKyoo' };

function showName(this: User) {
    console.log(this.name);
}

const a = showName.bind(Sam);
a();


console.log(add(1, 2));
console.log(isAdult(20));
abs(1, 2);
console.log(hello());
console.log(hello("LeeDongYoo"));
logIn("ID");
logIn("ID", 1234);
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
