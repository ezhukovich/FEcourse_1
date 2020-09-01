// 1  Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let range = [3,5,7,4,6,11,15];

// let total = () => {
//     let result = range.reduce(function (sum, current) {
//         return sum + current;
//     }, 0);
//     return result;
   
    
// }

// console.log(total(range));
 



// 2 Запросить 2 числа и найти только наибольший общий делитель.


// let NOD = (x, y) => {
//     if (y > x) return NOD(y, x);
//     if (!y) return x;
//     return NOD(y, x % y);
// }
// console.log(NOD(20, 50));



// 3 Запросить у пользователя число и вывести все делители этого числа.

// let n = +prompt('enter number');

// let showDivider = () => {

// let divisor = [];

// let i = 1;

// while (i < n) {
    
//     if (n % i == 0) divisor.push(i);
//     i++;
    
// }
    // console.log(divisor);
// }

// showDivider(n);





// 4 Определить количество цифр в введенном числе.

// let n = prompt('enter number');

let culcDigits = (n) => {
    
    let arr = n.split('');

    for (let i = 0; i <= arr.length; i++) {
        let result;
        if (i == arr.length) {
            return result = i;
            
        }   
    }
}

// document.getElementById("demo").innerHTML = `this number has ${culcDigits(n)} digits`;
// console.log('this number has', culcDigits(n), 'digits');
  
// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// let arr = [];
// let digits = (arr) => {
//     let n = 5;

//     let push = () => {
//         for (let i = 0; i < n; i++) {
//             let d = prompt('enter number');
//             arr.push(d);
//             if (i == n - 1) {
//                 return arr;
//             }
//         }
//     }
//     push();

//     console.log(arr);

//     return arr;
// }

// digits(arr);

// let nZero = (arr) => {
    
//    let zero = arr.filter(item => item == "0")
//     console.log('number of zero', zero.length);
//     return zero.length;
// }
//  nZero(arr);

// let positive = (arr) => {
//     let pos  = arr.filter(item => item > 0)
//     console.log('number of positive', pos.length);
//     return pos.length;
// }

// positive(arr);

// let negative = (arr) => {
//     let neg = arr.filter(item => item < 0)
//     console.log('number of negative', neg.length);
//     return neg.length;
// }

// negative(arr);

// let even = (arr) => {
//     let ev  = arr.filter(item => item !== "0" && item % 2 == 0 )
//     console.log('number of even', ev.length);
//     return ev.length;
// }

// even(arr);

// 6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// let a = +prompt('enter first number');

// let b = +prompt('enter second number');



// let answer = 'true';

// let calculator = (answer) => {
     
//     while (answer == 'true') {
//       let  todo = prompt('enter what to do: +, -, *, /');
//         switch (todo) {
//             case "+":
//                 console.log("+", a+b);
//                 answer = 'false';
//                 break;
//             case "-":
//                 console.log("-", a - b);
//                 answer = 'false';
//                 break;
//             case "*":
//                 console.log("*", a * b);
//                 answer = 'false';
//                 break;
//             case "/":
//                 console.log("/", a / b);
//                 answer = 'false';
//                 break;
//             default:
//                 console.log("Нет таких значений");
//         }
//         answer = prompt('enter "true" to continue or enter "false" to stop');
//     }
   
     
// }

// calculator(answer);






  


