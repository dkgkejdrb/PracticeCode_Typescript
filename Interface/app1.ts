// 인터페이스 정의
interface Add {
    (num1: number, num2: number): number;
}

// 함수 정의
const add: Add = function (x, y) {
    return x + y;
}

let res: number;
res = add(10, 20);
console.log(res);