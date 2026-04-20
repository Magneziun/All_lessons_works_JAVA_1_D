

//пуфы что это не нейросеть ctr+лкм перейти:
//https://drive.google.com/file/d/1NUjGX76DD-qlYvoY_7eDaD4Q3szeIxvk/view?usp=drive_link


// * ЗАДАЧА 8 - Случайные числа

let myNumbers = [5, 7, 3, 1, 2]

// 1. Сгенерируйте случайное целое число. Диапазон для случайного числа 1 - 10.

// 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers = [5, 7, 3, 1, 2]

console.log(`задача 8: \n исходник: ${myNumbers}`);
addQniqueRandomNumber(myNumbers);
console.log(`масив после добовления: ${myNumbers}`)


// 3. Если совпадает, вам нужно сгенерировать новое число.

// 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.

// ВАЖНО: В решении задачи используйте функции:

// - для генерации случайного числа в заданном диапазоне
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
} 

// - для добавления случайного числа в массив с возвратом измененного массива

function addQniqueRandomNumber(arr)
{
    let newNumber;
    do
    {
        newNumber = getRandomInt(1, 10);
    }
    while (arr.includes(newNumber))
    {
        arr.push(newNumber);
    }
    return arr;
}


//===================================================================================================
// * ЗАДАЧА 14 - Добавление уникальных элементов в массив
// 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
// 2. Если "inputArray" уже содержит "newElement", выведите в консоль "{newElement} уже находится в массиве"
// 3. В противном случае добавьте "newElement" в "inputArray"
function pushIfUnique(inputArray, newElement)
{
    if (inputArray.includes(newElement))
    {
        console.log(`${newElement} уже находится в массиве ${inputArray}`);
    }
    else {
        inputArray.push(newElement);
    }
}

// ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов


const demoArray = [123, 50, 27]
console.log(`задача 14: \n начальный масив: ${demoArray}`)
pushIfUnique(demoArray, 50) // "50 уже в массиве"
console.log(`после попытки добавления: 50 \n ${demoArray}`)
pushIfUnique(demoArray, 80)
console.log(`после попытки добавления: 80 \n ${demoArray}`)
pushIfUnique(demoArray, 80) // "80 уже в массиве"
console.log(`после попытки добавления: 80 \n ${demoArray}`)
pushIfUnique(demoArray, 77)
console.log(`после попытки добавления: 77 \n ${demoArray}`)
 
//===================================================================================================
// * ЗАДАЧА 28 – число текстом
function numberToWords(num)
{
    const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шеснадцать', 'семнадцать', 'восемнадцать', 'девятьнадцать'];
    const tens =  ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

    if (num < 10 || num > 99)
    {
        console.log(`[ERROR] введите нормальное число `)
        return 02;
    }
    if (num >= 10 && num <= 19)
    {
        return teens[num - 10];
    }
    else{
        const ten = Math.floor(num / 10);
        const unit = num % 10;14
        return tens[ten] + (unit ? ' ' + units[unit] : ''); 
    }
}

const userNum = prompt("введите число от 10 до 99");
console.log(`задача: 28 \n введенно число: ${userNum}`);
const num = parseInt(userNum, 10);
const words = numberToWords(num);

console.log(`вывод: ${num} - ${words}`);


// 1. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 
//35 - тридцать пять,  ->                        12 - двенадцать  
//30 - тридцать 5 - пять                         11 - ...
//40 - сорок                                     10 - ...
//50 - пятдесят                                  от 10 до 19ти отдельно ????
//...66
//...
//...
//89 - восемдетсят девять, 
//



//===================================================================================================
// * ЗАДАЧА 32 – спам

// 1. Написать функцию, для проверки спама в переданной строке.
//  Функция возвращает true если строка содержит спам.
//  Спамом считать следующие слова: 100%, бесплатно, 
// увеличение продаж, только сегодня, не удаляйте.


function isSpam(text)
{
    const spamWords = [`100%`, `бесплатно`, `увеличение продаж`, `только сегодня`, `не удаляйте`];
    return spamWords.some(word => text.toLowerCase().includes(word.toLowerCase())); //true если есть хоть одно
}

const userText = prompt("введите текст для проверки");
console.log(`задача 32: \n полученная строка ${userText}`);
const spamdetector = isSpam(userText); 
console.log(`Строка ${userText} содержит спам ${spamdetector}`)





//===================================================================================================
// * ЗАДАЧА 36 – самое длинное слово

// 1. Написать функцию, которая возвращает самое длинное слово из полученной строки

function getLongWord(sentence)
{
    const words = sentence.split(/[,\s;]+/);
    let longest = '';
    for (let word of words)
    {
        if(word.length > longest.length)
        {
           longest = word;
        }
    }
    return longest;
}

const userSentence = prompt("введите строку для поиска самого длиного слова");
console.log(`ввод: ${userSentence}`)
const longeestWord = getLongWord(userSentence);
console.log(`самое длинное слово: ${longeestWord}`)