// protected
class Car {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name);
    }
}
// super�� ��� Ŭ������ ����� ���� �� ����
class HYUNADAI extends Car {
    showName() {
        console.log(super.name);
    }
}
const myCar = new HYUNADAI("sm6");
myCar.showName();
function printSentence() {
    console.log("Using setTimeout()");
}
setTimeout(printSentence, 2000);
//# sourceMappingURL=Main.js.map