// string
let car = "HYUNDAI";
console.log(car);
car = "KIA";
console.log(car);
// int
let age = 35;
console.log(age);
// boolean
let isAdult = true;
console.log(isAdult);
// array
let a1 = [1, 2, 3];
let a2 = ['four', 'five', 'six'];
console.log(a1, a2);
// Ʃ�� (Tuple)
let b = ['abc', 1];
console.log(b[0]);
console.log(b[1]);
// �Լ� void
function showError() {
    console.log("Call function");
}
showError();
// enum ������
var Person;
(function (Person) {
    Person["Name"] = "LeeDongKyoo";
    Person[Person["Age"] = 35] = "Age";
    Person["Job"] = "Programmer";
})(Person || (Person = {}));
console.log(Person.Name, Person.Age, Person.Job);
console.log(Person["LeeDongKyoo"], Person[35], Person["Programmer"]);
// enum ������ ����
let Person1;
Person1 = Person.Name;
console.log(Person1);
// null
let a = null;
console.log(a);
function printSentence() {
    console.log("Using setTimeout()");
}
setTimeout(printSentence, 2000);
//# sourceMappingURL=Main.js.map