interface Login {
    ID: string;
    PW: number;
}
// 오버로드, ID 가 string 이면, Login 리턴
function login(ID: string, PW: number): Login;

// 오버로드, ID 가 number 이면, string 리턴
function login(ID: number, PW: number): string;
function login(ID: string | number, PW: number): Login | string {
    if (typeof ID == "string") {
        return {
            ID, PW
        };
    } else {
        return "Input only number on PW";
    }
}

const web1: Login = login("ldk", 1234);
const web2: string = login(1234, 5678);

console.log(web1);
console.log(web2);