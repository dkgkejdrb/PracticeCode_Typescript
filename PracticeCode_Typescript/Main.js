let add = (a, b) => { return a + b; };
let size = (a, b) => {
    if (a > b) {
        console.log(`${a} is bigger than ${b}`);
    }
    if (b > a) {
        console.log(`${b} is bigger than ${a}`);
    }
};
let hi = (n) => {
    let res;
    for (let i = 1; i <= n; i++) {
        res += `hi`;
    }
    return res;
};
console.log(add(1, 2));
size(10, 5);
console.log(hi(10));
function printSentence() {
    console.log("Using setTimeout()");
}
setTimeout(printSentence, 2000);
//# sourceMappingURL=Main.js.map