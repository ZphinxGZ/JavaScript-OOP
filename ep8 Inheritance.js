//Inheritance สืบทอดคุณสมบัติ
class User {
  //defult
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }

  showDetail() {
    console.log(`ชื่อผู้ใช้ = ${this.#name} password = ${this.#password}`);
  }

  //Method เปลี่ยน Private เป็น ข้อมูลอื่น
  set Name(newName) {
    this.#name = newName;
  }

  set Password(newPassword) {
    this.#password = newPassword;
  }

  //Method ดึงข้อมูล
  get Name() {
    return this.#name;
  }
  get Password() {
    return this.#password;
  }

  static showType() {
    console.log("ฉันเป็นผู้ใช้งานระบบ");
  }
}

//สืบทอด
class Teacher extends User {
  constructor() {
    console.log("ฉันเป็นครู");
  }
}

class Student extends User {
  constructor() {
    console.log("ฉันเป็นนักเรียน");
  }
}

const user1 = new Teacher();
const user2 = new Student();
