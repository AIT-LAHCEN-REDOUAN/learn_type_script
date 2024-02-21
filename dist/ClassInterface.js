"use strict";
class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        return this.age = age;
    }
}
const user = new Users("ayman", 258);
console.log(user.getName());
console.log(user.getAge());
//# sourceMappingURL=ClassInterface.js.map