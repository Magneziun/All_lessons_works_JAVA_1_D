// let userName = prompt("Name ?");

// let key = null;

// let user = {
//   login: "gena",
//   age: 51,
//   psport: true,
//   //   [key]: "676767676",
//   adr: {
//     city: "Orel",
//     str: "Lenina",
//     dom: 123445,
//   },
// };

// const myObj = new Object();
// console.log(myObj);
// user.adr.dom = 1111;

// console.log(user);

// user.login = "oleg";
// user.phone = "77777777";
// delete user.login;

// console.log(user);

// const arrKey = Object.keys(user);
// const arrValue = Object.values(user);
// const arrAll = Object.entries(user);
// console.log(arrKey);
// console.log(arrValue);
// console.log(arrAll);
// ==========================================================

// const tovar = {
//   name: "ananas",
//   price: 122343,
//   date: "12.05.2026",
// };

// Object.seal(tovar);

// delete tovar.name;
// tovar.phone = "55555555";
// tovar.name = "kivi";

// Object.freeze(tovar);

// tovar.name = "banan";

// console.log(tovar);
// ============================================================

const user = {
  login: "denis",
  phone: 4444444,
  adr: {
    city: "Tula",
    str: "Lenina",
  },
};

// const people = { ...user };
// user.age = 51;

const people = JSON.parse(JSON.stringify(user));

user.adr.city = "SP";
// console.log(typeof x, x);

console.log("user", user);
console.log("people", people);
