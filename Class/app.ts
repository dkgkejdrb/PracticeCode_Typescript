////// �⺻ ���� �����ڴ� public
////class Car {
////    name: string;
////    constructor(name: string) {
////        this.name = name;
////    }
////    start() {
////        console.log("start");
////    }
////}

////const myCar = new Car("sm5");
////console.log(myCar.name);
////myCar.start();

// protected
class Car {
    name: string;
    constructor(name: string) {
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