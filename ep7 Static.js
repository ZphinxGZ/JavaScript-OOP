//Static
class User {
  //defult
  #name;
  #password;
  static database = [];
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

  static addUser(newUser) {
    this.database.push(newUser);
  }
}

//สร้าง object
const user1 = new User("kunakorn", 2500);
const user2 = new User("Nutt", 1000);
const user3 = new User("Fah", 3500);

//เก็บข้อมูล User
User.addUser(user1);
User.addUser(user2);
User.addUser(user3);

// //แสดงผล
// User.database.forEach((user) => {
//   user.showDetail();
// });
// //แสดงผล
// for (user of User.database) {
//   user.showDetail();
// }
