//Encapsulation
//Access Modifier = Public, Protected(_), Private(#)
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
}

//สร้าง object
//private = class จะแก้ข้อมูลได้เท่านั้น
const user1 = new User("kunakorn", 2500);
//private = class จะแก้ข้อมูลได้เท่านั้น

user1.name = "AuHacker";
user1.password = 5555555;
user1.showDetail();
