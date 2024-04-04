//Getter Setter Method

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
  setName(newName) {
    this.#name = newName;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  //Method ดึงข้อมูล
  getName() {
    return this.#name;
  }
  getPassword() {
    return this.#password;
  }
}

//สร้าง object
const user1 = new User("kunakorn", 2500);
user1.showDetail();

user1.setName("Hacker");
user1.setPassword(2589);

console.log(user1.getName());
console.log(user1.getPassword());
