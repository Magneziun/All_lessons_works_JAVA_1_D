localStorage.setItem("firstName", prompt("Имя"));
localStorage.setItem("lastName", prompt("Фамилия"));

let langsInput = prompt("Языки программирования (через пробел)");
let languagesArray = langsInput.split(' ');
localStorage.setItem("languages", JSON.stringify(languagesArray));

localStorage.setItem("email", prompt("Email"));

let city = prompt("Город");
let street = prompt("Улица");
let house = prompt("Номер дома");
let addressObject = 
{
        city, 
        street, 
        house 
};
localStorage.setItem("address", JSON.stringify(addressObject));