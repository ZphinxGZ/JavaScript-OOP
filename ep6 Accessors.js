// Accessors
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
}

//สร้าง object
const user1 = new User("kunakorn", 2500);
user1.Name = "fah";
user1.Password = 456123;
console.log(user1.Name);
console.log(user1.Password);
