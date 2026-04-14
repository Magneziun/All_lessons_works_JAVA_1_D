// ЗАДАЧА 6
let fiveDgtNumber = prompt("Введите пятизначное число:"); 
console.log("Вы ввели:", fiveDgtNumber);
let lastDigit = fiveDgtNumber.slice(-1);
let rest = fiveDgtNumber.slice(0, -1);
let resultNumber = lastDigit + rest;
alert("Результат: " + resultNumber);

// ЗАДАЧА 7 
let firstName = "Сергей";      
let lastName = "Мавроди";      
let profession = "Криминальная личность"; 
let introduction = `я ${firstName} ${lastName}, и я - ${profession}`;
console.log(introduction);

// ЗАДАЧА 8
let str1 = prompt("Введите первую строку:");
let str2 = prompt("Введите вторую строку:");
let len1 = str1.length;
let len2 = str2.length;
let difference = len1 - len2;
if (difference > 0) {
    console.log(`Первая строка длиннее на ${difference}`);
} else if (difference < 0) {
    console.log(`Вторая строка длиннее на ${-difference}`);
} else {
    console.log("Строки одинаковы");
}

// ЗАДАЧА 10 
let digit = prompt("Введите число от 0 до 9:");
let symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("]; // c нуля идет, я шарю
alert(`Спецсимвол: ${symbols[digit]}`);

// ЗАДАЧА 11 
let userText = prompt("Введите текст:");
let randomNum = Math.floor(Math.random() * 5) + 1; 
let stars = "*".repeat(randomNum);
let resultText = stars + userText + stars;
alert(resultText);


//далее второй файл или певый хз (делайте можалуйста одним Word документом чтобы не путаться)


// ЗАДАЧА 6
const USD_TO_EUR = 0.92; //рубль слишком скачет прост
let dollars = parseFloat(prompt("Введите сумму в долларах:"));
let euros = dollars * USD_TO_EUR;
alert(`${dollars} Доларов = ${euros.toFixed(2)} Евров`);

// ЗАДАЧА 7
let flashGb = parseFloat(prompt("Объём флешки в Гб:"));
let fileMb = parseFloat(prompt("Размер одного файла в Мб:"));
let flashMb = flashGb * 1024;
let filesCount = Math.floor(flashMb / fileMb); //не уверен что правильно, но по логике так, окр вниз потому что нельзя файлы покусочкам
alert(`Поместится ${filesCount} файлов`);

// ЗАДАЧА 8 
let money = parseFloat(prompt("Сколько в кошельке?"));
let price = parseFloat(prompt("Цена одной шоколадки:"));
let chocolats = Math.floor(money / price);
let change = (money % price).toFixed(2);
alert(`Можно купить ${chocolats} шт, сдача: ${change}`);

// ЗАДАЧА 13 
let threDigit = prompt("Введите трехзнач. число:");
let number = parseInt(threDigit);
let secondDigit = Math.floor((number % 100) / 10);
alert(`Вторая цифра: ${secondDigit}`);

// ЗАДАЧА 14
let sales = parseFloat(prompt("Сумма за месяц:"));
let salary = 300000 + sales * 0.12;
alert(`Зарплата составит: ${salary.toFixed(2)} руб.`);

// ЗАДАЧА 18
let totalSeconds = parseInt(prompt("Введите число секунд:"));
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
alert(`Введено секунд: ${totalSeconds} \n ЧЧ:ММ:СС -> ${hours}:${minutes}:${seconds}`);

// Имена переменых по оформлены вашему приказу