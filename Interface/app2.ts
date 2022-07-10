// �������̽� ����
interface Car {
    name: String;
    wheels: number;
    start(): void;
}


// Car �������̽� Ȯ��
interface ElectCar extends Car {
    battery: number;
    stop(): void;
}


// �������̽��� Ŭ���� ����
class MyCar implements Car {
    name = "sm5";
    wheels = 4;

    start() {
        console.log("GO!");
    }
}

// Ȯ��� �������̽��� Ŭ���� ����
class NewMyCar implements ElectCar {
    name = "teslar";
    wheels = 4;
    battery = 40;
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