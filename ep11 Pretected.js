//Protected
class User {
  //defult
  _name;
  #password;

  constructor(name, password) {
    this._name = name;
    this.#password = password;
  }

  showDetail() {
    console.log(`ชื่อผู้ใช้ = ${this._name} password = ${this.#password}`);
  }

  //Method เปลี่ยน Private เป็น ข้อมูลอื่น
  set Name(newName) {
    this._name = newName;
  }

  set Password(newPassword) {
    this.#password = newPassword;
  }

  //Method ดึงข้อมูล
  get Name() {
    return this._name;
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
    console.log(`ฉันเป็นครู ชื่อ ${this._name} สอนวิชา ${this.#course}`);
  }
}

class Student extends User {
  #score;

  constructor(name, password, score) {
    super(name, password); //อ้างอิงไปที่ Constructor แม่
    this.#score = score;
  }

  showDetail() {
    console.log(
      `ฉันเป็นนักเรียน ชื่อ ${this._name} สอบได้ ${this.#score} คะแนน`
    );
  }
}

const user1 = new Teacher("kunakorn", 2500, "เขียนโปรแกรม");
user1.showDetail();
const user2 = new Teacher("Kham", 4231, "ENG");
user2.showDetail();
const user3 = new Student("jojo", 1234, 86);
user3.showDetail();
const user4 = new Student("Jame", 7541, 99);
user4.showDetail();
