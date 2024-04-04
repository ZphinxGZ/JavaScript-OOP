//Method
class User {
  //defult
  name = "Avatar";
  password = 1234;

  constructor(name, password) {
    this.name = name;
    this.password = password;
    // this.showDetail(); //เรียกใช้งานใน class
  }

  //สร้าง Method
  showDetail() {
    console.log(`ชื่อผู้ใช้ = ${this.name} password = ${this.password}`);
  }
}

//สร้าง object
const user1 = new User("kunakorn", 2500);
user1.showDetail();

const user2 = new User("jojo", 456);
user2.showDetail();

const user3 = new User("nut", 789);
user3.showDetail();
