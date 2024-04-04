//Constructor
class User {
  //property,//Attibute
  name = "Avatar";
  password = 1234;
  //parameter constructor
  //โครงสร้าง Constructor([parameter]){}
  //defult constructor
  constructor(name, password) {
    //this ชี้ไปที่ proprety = name = parameter
    this.name = name;
    this.password = password;
  }
}

//สร้าง object
//object 1
const user1 = new User("kunakorn", 2500);
console.log(user1.name, user1.password);

const user2 = new User("jojo", 456);
console.log(user2);

const user3 = new User("nut", 789);
console.log(user3.name);
console.log(user3.password);
