function login(ID, PW) {
    if (typeof PW == "number") {
        return {
            ID, PW
        };
    }
    else {
        return "���̵�� ���ڸ� �Է����ּ���.";
    }
}
const web1 = login("ldk", 1234);
const web2 = login("ldk", "5678");
//# sourceMappingURL=app.js.map