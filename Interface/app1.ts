// �������̽� ����
interface Add {
    (num1: number, num2: number): number;
}

// �Լ� ����
const add: Add = function (x, y) {
    return x + y;
}

let res: number;
res = add(10, 20);
console.log(res);