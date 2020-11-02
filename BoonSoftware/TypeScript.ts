interface Person {
  first_name: String;
  last_name: String;
  email: String;
  age: Number;
  pincode: Number;
}

var engineer: Person = {
  first_name: "Raunak",
  last_name: "Shrivastava",
  email: "iamrawnak.rs@gmail.com",
  age: 25,
  pincode: 700042,
};

console.log(engineer.last_name);
