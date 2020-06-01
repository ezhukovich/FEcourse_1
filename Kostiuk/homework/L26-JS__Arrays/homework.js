// 1   Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список.Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта.Функция принимает название продукта и отмечает его как купленный.


let list = [
    {
        name: 'banana',
        quantity: 3,
        isBought: false,
    },
    {
        name: 'apple',
        quantity: 5,
        isBought: true,
    },
    {
        name: 'milk',
        quantity: 1,
        isBought: false,
    },
]

console.log(list);

let sorting = () => {

    list.sort(function (a, b) {
        if (a.isBought > b.isBought) {
            return 1;
        }
        if (a.isBought < b.isBought) {
            return -1;
        }

        return 0;
    });
    
}

// sorting(list);



let addItem = (name, number) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name == name) {

            return list[i].quantity += number;

        }

    }

  list.push({ name: `${name}`, quantity: +`${number}`, isBought: false, })
}

// addItem('apple', 2);

// console.log('===:', list);

let alreadyBought = (item) => {
  for( let i = 0; i < list.length; i++){
      if (list[i].name == item) {
          return list[i].isBought = true;
      }
  }
    
}

// alreadyBought('milk');

console.log(list);

// 2  Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

let check = [
    {
        name: 'banana',
        quantity: 3,
        price: 2,
    },
    {
        name: 'apple',
        quantity: 5,
        price: 3,
    },
    {
        name: 'milk',
        quantity: 1,
        price: 1.5,
    },
    {
        name: 'cheese',
        quantity: 1,
        price: 4,
    },
]
let arrShow = () => {
    check.forEach((el) => {
        console.log('name:', el.name);
        console.log('quantity:', el.quantity);
        console.log('price:', el.price);
        console.log('==============');
    });
}




let total = () => {

    const totalCost = check.reduce((total, item) => {
        return total + (item.quantity * item.price);
    }, 0);

    return totalCost;

}

let calcCost = () => {
    check.forEach((el) => {
        return el.cost = el.quantity * el.price;
    })
}



console.log('total:', total(check));
 
console.log(check);

let findMax = (check) => {
    let arr = [];

    calcCost(check);

    check.forEach((el) => arr.push(el.cost));
        
    console.log('arr:', arr);

   let max = Math.max(...arr);
      
   return max;
}

console.log("maxcost:",findMax(check));


// 3   Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.


const styles = [
    {
        name:  'color', 
        value: 'red', 
    },

    {
        name: 'font-size',
        value: '18px',
    },

    {
        name: 'text-align',
        value: 'center',
    },

    {
        name: 'text-decoration',
        value: 'underline',
    },
]


let writeText = (text, styles) => {
    styles.forEach(element => {
        document.write("<p" + " " + "style=" + "'" + `${element.name}:` + `${element.value};` + "'" + ">" + `${text}` + "</p>")
    })
    
}


writeText('Hello', styles);


// 4  Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы.Объект - группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию(по алфавиту).


const rooms = [
    { name: '01',
      seats: 20,
      faculty: 'economy'
    },
    {
        name: '02',
        seats: 16,
        faculty: 'economy'
    },
    {
        name: 'small',
        seats: 11,
        faculty: 'ecology'
    },
    {
        name: 'green',
        seats: 16,
        faculty: 'ecology'
    },
    {
        name: 'medium',
        seats: 15,
        faculty: 'agriculture'
    },
]

console.log(rooms);

const grups = [
    {   
      name: 'economist',
      students: 20,
      faculty: 'economy'
    },
    {
        name: 'ecologist',
        students: 14,
        faculty: 'ecology'
    },
]

console.log('grups:', grups);


let showRooms = (nameOfFaculty) => {
  rooms.forEach(element => {
      element.faculty == nameOfFaculty ? console.log(element.name, element.seats) : ' ';
        
   } );
}

showRooms('ecology');


let chooseRoom = (group) => {
    rooms.forEach(element => {
        element.faculty == group.faculty && element.seats >= group.students ? console.log('Auditory name:', element.name, ) : ' ';

    });
}

chooseRoom(grups[1]);


let sortSeats = () => {
  let sortedRooms =  rooms.sort(function (a, b) { return a.seats - b.seats });
    console.log(sortedRooms);
        
}

sortSeats();