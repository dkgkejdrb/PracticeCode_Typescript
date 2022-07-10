// Score type 정의
type Score = 'A' | 'B' | 'C' | 'D';


// 인터페이스 정의
interface Person {
    name: string;
    age: number;
    height?: number;
    readonly birthYear?: number;
    [grade: number]: Score; // type 지정
}

// 인터페이스 쓰기
let me: Person = {
    name: "LeeDongKyoo",
    age: 35,
    height: 174.5,
    birthYear: 19871016,
    1: 'A'
    /*2: 'F' // type 외에 지정 불가*/
}
console.log(me.name, me.age, me.height, me.birthYear);

me.name = "HongKilDong";
me.age = 99;
me.height = 181.2;
/*me.birthYear = 20001016;*/
console.log(me.name, me.age, me.height);


function printSentence() {
    console.log("Using setTimeout()")
}
setTimeout(printSentence, 2000)