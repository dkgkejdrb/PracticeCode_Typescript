// 인터페이스 정의
interface Car {
    name: String;
    wheels: number;
    start(): void;
}


// Car 인터페이스 확장
interface ElectCar extends Car {
    battery: number;
    stop(): void;
}


// 인터페이스로 클래스 정의
class MyCar implements Car {
    name = "sm5";
    wheels = 4;

    start() {
        console.log("GO!");
    }
}

// 확장된 인터페이스로 클래스 정의
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

// const 로 객체 정의
const obj = new MyCar();
console.log(obj);
obj.start();

// const 로 obj1 객체 정의
const obj1 = new NewMyCar();
console.log(obj1);
obj1.stop();