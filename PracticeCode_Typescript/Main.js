// �������̽��� Ŭ���� ����
class MyCar {
    constructor() {
        this.name = "sm5";
        this.wheels = 4;
    }
    start() {
        console.log("GO!");
    }
}
// Ȯ��� �������̽��� Ŭ���� ����
class NewMyCar {
    constructor() {
        this.name = "teslar";
        this.wheels = 4;
        this.battery = 40;
    }
    start() {
        console.log("GO!");
    }
    stop() {
        console.log("STOP!");
    }
}
// const �� ��ü ����
const obj = new MyCar();
console.log(obj);
obj.start();
// const �� obj1 ��ü ����
const obj1 = new NewMyCar();
console.log(obj1);
obj1.stop();
function printSentence() {
    console.log("Using setTimeout()");
}
setTimeout(printSentence, 2000);
//# sourceMappingURL=Main.js.map