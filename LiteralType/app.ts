import { type } from "os";

// 타입을 한정함
const userName1 = "LDK";

// 타입을 변경할 수 있음
let userName2 = "JEJ";

// 타입 에러
// userName1 = "CJY";


type Job = "police" | "teacher" | "developer";

interface Person {
    name: string
    age: number
    job: Job
}

const person: Person = {
    name: "LDK",
    age: 35,
    job: "developer"
    // job: "student" // 타입 에러
}

console.log(person.name, person.age, person.job);



//// 유니온 타입 응용
//interface Car {
//    name: "car";
//    color: string;
//    start(): void;
//}

//interface Mobile {
//    name: "mobile";
//    color: string;
//    call(): void;
//}

//function getGift(gift: Car | Mobile) {
//    console.log(gift.color);
//    // gift.start(); // 오류

//    if (gift.name == "car") {
//        gift.start();
//    } else {
//        gift.call();
//    }
//}


// 교차 타입
interface Car {
    name: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

// Toy 와 Car 교차 타입
const toyCar: Toy & Car = {
    name: "sm5",
    start() { },
    color: "blue",
    price: 1000
};