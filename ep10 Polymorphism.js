// Polymorphism การพร้องรูป
//Overriding Method
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
  #course;

  constructor(name, password, course) {
    super(name, password); //อ้างอิงไปที่ Constructor แม่
    this.#course = course;
  }

  showDetail() {
    console.log(`ฉันเป็นครู สอนวิชา ${this.#course}`);
  }
}

class Student extends User {
  #score;

  constructor(name, password, score) {
    super(name, password); //อ้างอิงไปที่ Constructor แม่
    this.#score = score;
  }

  showDetail() {
    console.log(`ฉันเป็นนักเรียน สอบได้ ${this.#score} คะแนน`);
  }
}

const user1 = new Teacher("kunakorn", 2500, "เขียนโปรแกรม");
user1.showDetail();
const user2 = new Student("jojo", 1234, 86);
user2.showDetail();
