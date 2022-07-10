import { log } from "console";

// number ���� �Լ�
function add(a: number, b: number): number {
    return a + b;
}

// bool ���� �Լ�
function isAdult(age: number): boolean {
    return age > 19;
}

// void ���� �Լ�
function abs(a: number, b: number): void {
    let res: number;
    res = a - b;
    console.log(res);
}

// ������ �Ű������� ���� ���ϰ��� ������ �Լ�
function hello(name?: string): string {
    return `Hello, ${name || "World"}`;
}

// �Ű������� ������ �Ű������� ���� ���ϰ��� ������ �Լ� 
function logIn(id: string, pw?: number): void {
    if (pw !== undefined) {
        console.log("Welcome!");
    }
    else {
        console.log("Please, input your pw.");
    }
}

// C#�� params�� ����� �Ű������� ���� �Լ�
function sum(...nums: number[]): number {
    return nums.reduce((result, num) => result + num, 0);
}

// this�� �����ϱ�
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
