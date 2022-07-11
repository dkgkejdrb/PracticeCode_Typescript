import { type } from "os";

// Ÿ���� ������
const userName1 = "LDK";

// Ÿ���� ������ �� ����
let userName2 = "JEJ";

// Ÿ�� ����
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
    // job: "student" // Ÿ�� ����
}

console.log(person.name, person.age, person.job);



//// ���Ͽ� Ÿ�� ����
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
//    // gift.start(); // ����

//    if (gift.name == "car") {
//        gift.start();
//    } else {
//        gift.call();
//    }
//}


// ���� Ÿ��
interface Car {
    name: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

// Toy �� Car ���� Ÿ��
const toyCar: Toy & Car = {
    name: "sm5",
    start() { },
    color: "blue",
    price: 1000
};