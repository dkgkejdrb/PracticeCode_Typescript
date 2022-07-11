interface Login {
    ID: string;
    PW: number;
}
// �����ε�, ID �� string �̸�, Login ����
function login(ID: string, PW: number): Login;

// �����ε�, ID �� number �̸�, string ����
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