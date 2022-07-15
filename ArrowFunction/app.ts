let add = (a: number, b: number): number => { return a + b };
let size = (a: number, b: number): void => {
    if (a > b) { console.log(`${a} is bigger than ${b}`); }
    if (b > a) { console.log(`${b} is bigger than ${a}`); }
};


console.log(add(1, 2));
size(10, 5);