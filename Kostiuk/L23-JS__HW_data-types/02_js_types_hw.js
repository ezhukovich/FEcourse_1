// 1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).


// const AGE = prompt("Enter your age");

// if (AGE > 0 && AGE <= 12) {
//     console.log("\u{1F60D}", "child");
// }
// else if (AGE > 12 && AGE <= 18) {
//     console.log("\u{1F60D}", "teenager");
// } 

// else if (AGE > 18 && AGE <= 60) {
//     console.log("\u{1F60D}", "adult");
// } 

// else if (AGE > 60) {
//     console.log("\u{1F60D}", "pensioner");
// } 

// else {
//     alert("Please, enter positive number \u{1F60D}");
// }



// 2  Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).


// const NUMBER = + prompt("Enter number from 0 to 9");
// console.log(typeof NUMBER);
// let integer = parseInt(NUMBER, 10);  // string to number

// console.log(typeof integer);
// switch (NUMBER) {

    
//     case 1:
//         console.log("!");
//         break;

//     case 2:
//         console.log("@");
//         break;
        
//     case 3:
//         console.log("#");
//         break;

//     case 4:
//         console.log("$");
//         break;
//     case 5:
//         console.log("%");
//         break;

//     case 6:
//         console.log("^");
//         break;

//     case 7:
//         console.log("&");
//         break;

//     case 8:
//         console.log("*");
//         break;

//     case 9:
//         console.log("(");
//         break;

//     case 0:
//         console.log(")");
//         break;

//     default:
//         console.log("Enter number from 0 to 9!");
//         break;
        
// }


// 3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// const NUMBER =  prompt("Enter number with three digits");

// if (NUMBER[0] == NUMBER[1] || NUMBER[0] == NUMBER[2]) {
//     console.log(NUMBER[0], 'true');
// }
// else if (NUMBER[1] == NUMBER[2]) {
//     console.log(NUMBER[1], "true");
// }
// else {
//     console.log("\u{1F60D}", 'false');
    
// }


// 4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// const year = prompt("Enter year");

// if (year % 400 == 0 || year % 4 == 0) {
//     console.log("it is a leap year")
// }
// else {
//     console.log("\u{1F60D}", "it is not a leap year")
// }


// 5  Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом

// const NUMBER = prompt("Enter number with five digits");

// if (NUMBER[0] == NUMBER[4] && NUMBER[1] == NUMBER[3]) {
//     console.log("\u{1F60D}", "Congratulations, this is palindrome :", NUMBER );
// }
// else {
//     console.log("Sorry, this is not a palindrome");
// }


// 6  Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// const amountUSD = + prompt("Enter amount of USD");

// const choosedCurrency = prompt("Please choose currency to exchange: EUR, UAN, AZN");

// let eurRate = 0.92;

// let uanRate = 26.67;

// let aznRate = 1.70;

// if (choosedCurrency.includes("EUR") || choosedCurrency.includes("eur")) {
//     let result = amountUSD * eurRate;
//     console.log("EUR :", Math.floor(result * 100) / 100);
// }
// else if (choosedCurrency.includes("UAN") || choosedCurrency.includes("uan")) {
//      result = amountUSD * uanRate;
//     console.log("UAN :", Math.floor(result * 100) / 100);
// }
// else if (choosedCurrency.includes("AZN") || choosedCurrency.includes("azn")) {
//      result = amountUSD * aznRate;
//     console.log("AZN :", Math.floor(result * 100) / 100);
// }
// else {
//     console.log("\u{1F60D} :", "Choose correct currency from the displayed list");
// }



// 7  Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// const amountOfMoney = + prompt("Enter amount of money");

// if(amountOfMoney >= 200 && amountOfMoney <= 300) {
//     let result = amountOfMoney - amountOfMoney * 0.03;
//     console.log("TOTAL :", Math.floor(result * 100) / 100);
// }
// else if (amountOfMoney > 300 && amountOfMoney <= 500) {
//     result = amountOfMoney - amountOfMoney * 0.05;
//     console.log("TOTAL :", Math.floor(result * 100) / 100);
// }
// else if (amountOfMoney > 500 ) {
//     result = amountOfMoney - amountOfMoney * 0.07;
//     console.log("TOTAL :", Math.floor(result * 100) / 100);
// }
// else if (amountOfMoney > 0 && amountOfMoney < 200) {
    
//     console.log("\u{1F60D} :", "Plaese choose more items to get discount");
// }
// else {
//     console.log("\u{1F60D} :", "Plaese enter correct number");
// }


// 8  Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// const circleLength = + prompt("Enter the length of circle");

// const squarePerimeter = + prompt("Enter the Perimeter of a square");

// let d = circleLength / 3.14;

// let a = squarePerimeter / 4;

// if (d < a) {
//     console.log("\u{1F60D} :", "It is true, this circle can be inside of this square");
// }
// else {
//     console.log("\u{1F60D} :", "false");
// }


// 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// const questionOne = prompt(`What is the capital of Ukraine ?
// a) Kyiv,
// b) Odessa,
// c) Zhytomyr
// `);

// const questionTwo = prompt(`How many fingers on your hand ?
// a) 3,
// b) 5,
// c) 7
// `);

// const questionThree = prompt(`Pi equals ?
// a) 3,
// b) 2.5,
// c) 3.14
// `);



// let score = 0;


 
// if (questionOne == "Kyiv" || questionOne == "a") {
//     score += 2;
//     console.log("1", "true");
// }
// else {
    
//     console.log("1", 0);
// }

//  if (questionTwo == "5" || questionTwo == "b") {
//         score += 2;
//      console.log("2", "true");
//     }
//  else {
     
//      console.log("2", 0);
//  }

//     if (questionThree == "3.14" || questionThree == "c") {
//         score += 2;
//         console.log("3", "true");
//     }
//     else {
        
//         console.log("3", 0);
//     }
// console.log("========");
// console.log(score);



// 10 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

// let day = prompt('Enter day:');

// let month = prompt("Enter month:");

// let year = prompt("Enter year:");


// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ) {
    
//     if (day == 31) {
//         day = 1;

//         if (month == 12) {
//             month = 1;
//             ++year;

//         }else{
//             if (day < 31) {
//                ++ day;
//             }
//         }
//     }

// }else {

//     if (day == 30) {
//         day = 1;
//         ++month;

//     }else{

//         if (year % 400 == 0 || year % 4 == 0) {

//             if (month == 2) {

//                 if (day == 29) {
//                     ++month;
//                     day = 1;

//                 }else{
//                     ++day;
//                 }

//             }else{
//                 ++day;
//             }

//         }else{

//             if (month == 2) {

//                 if (day == 28) {
//                     ++month;
//                     day = 1;
//                 }else{
//                     ++day;
//                 }
//             }
//         }
//     }
// }

// console.log(`${day} ${month} ${year}`);













