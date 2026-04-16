// let age = 25;
// 18 - ребенок
// 30 - молодой
// 50 - зрелый
// 70 - пенсионер
// 70 > долгожитель

// if (age < 18) {
//   console.log("ребенок");
// } else {
//   if (age < 30) {
//     console.log("молодой");
//   } else {
//     if (age < 50) {
//       console.log("зрелый");
//     } else {
//       if (age < 70) {
//         console.log("пенсионер");
//       } else {
//         console.log("долгожитель");
//       }
//     }
//   }
// }

// if (age < 18) {
//   console.log("ребенок");
// } else if (age < 30) {
//   console.log("молодой");
// } else if (age < 50) {
//   console.log("зрелый");
// } else if (age < 70) {
//   console.log("пенсионер");
// } else {
//   console.log("долгожитель");
// }

// if (age < 18) console.log("ребенок");
// if (age >= 18 && age < 30) console.log("молодой");
// if (age >= 30 && age < 50) console.log("зрелый");
// if (age >= 50 && age < 70) console.log("пенсионер");
// if (age > 70) console.log("долгожитель");

// const myRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
// console.log(myRandom);
// console.log("------------------------");

// switch (myRandom) {
//   case 1:
//   case 7:
//     console.log(" + 100");
//     break;
//   case 2:
//   case 9:
//     console.log(" + 200");
//     break;
//   case 3:
//     console.log(" + 300");
//     break;
//   case 4:
//     console.log(" - 300");
//     break;
//   case 5:
//   case 8:
//     console.log(" - 400");
//     break;
//   case 6:
//     console.log(" - 500");
//     break;
//   default:
//     console.log("попробуйте еще раз");
// }

// console.log("next cod");

// let userAge = 13;

// if (userAge >= 18) {
//   console.log("Welcome !!");
// } else {
//   console.log("Error");
// }

// let text = userAge >= 18 ? "Welcome !!" : "Error";
// console.log(text);

// ========================================================

const car = {
  brand: "KIA",
  year: 2023,
  color: "red",
  price: 123444,
};

if ("price" in car) {
  console.log(car.price);
} else {
  console.log("НЕПОЛНЫЕ ДАННЫЕ");
}
