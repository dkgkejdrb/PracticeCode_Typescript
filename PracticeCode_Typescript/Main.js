"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number ���� �Լ�
function add(a, b) {
    return a + b;
}
// bool ���� �Լ�
function isAdult(age) {
    return age > 19;
}
// void ���� �Լ�
function abs(a, b) {
    let res;
    res = a - b;
    console.log(res);
}
// ������ �Ű������� ���� ���ϰ��� ������ �Լ�
function hello(name) {
    return `Hello, ${name || "World"}`;
}
// �Ű������� ������ �Ű������� ���� ���ϰ��� ������ �Լ� 
function logIn(id, pw) {
    if (pw !== undefined) {
        console.log("Welcome!");
    }
    else {
        console.log("Please, input your pw.");
    }
}
// C#�� params�� ����� �Ű������� ���� �Լ�
function sum(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
const Sam = { name: 'LeeDongKyoo' };
function showName() {
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
function printSentence() {
    console.log("Using setTimeout()");
}
setTimeout(printSentence, 2000);
//# sourceMappingURL=Main.js.map