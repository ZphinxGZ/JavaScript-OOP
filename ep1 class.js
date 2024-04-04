//สร้าง class
class User {
  //property,//Attibute
  name = "Kunakorn";
  password = 1234;
  
}

//สร้าง object
//object 1
const user1 = new User();
//เปลี่ยนแปลงข้อมูลใน proprety ได้
user1.name = "Au";
user1.password = 7890;

console.log(user1.name);
console.log(user1.password);

//object 2
const user2 = new User();

console.log(user2.name);
console.log(user2.password);
