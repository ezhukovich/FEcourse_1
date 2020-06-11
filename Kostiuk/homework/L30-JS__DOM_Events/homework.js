



let el = document.getElementById('text');


document.addEventListener('keydown', function (event) {
    if (event.ctrlKey == true && event.code == 'KeyE') {
        event.preventDefault();
        console.log(el);
        
        el.style.display = 'none';
        
        console.log(event);
        console.log(event.target);
        
        console.log(this);
        let input = document.createElement('textarea');
    
        input.value = 'Hello World!';
        input.classList.add('text');
        el.parentNode.replaceChild(input, el);

    }
  });


document.addEventListener('keydown', function (event) {
    if (event.ctrlKey == true && (event.keyCode == 107 || event.keyCode == 187)) {
     
        event.preventDefault();
        let input = document.querySelector('.text');
        console.log(input);
        console.log(input.value);

        let div  = document.createElement('div');
        div.innerText = input.value;
        input.parentNode.replaceChild(div, input);   
    }
});

// document.addEventListener('keydown', function(event) {
//        console.log(event.keyCode);
// });

// 2  Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки


let studentsCol = document.getElementById('sec_column');

studentsCol.addEventListener('click', function (event) { 
    

    let students = document.querySelectorAll('.students');

    let arr = [];

    for (let i = 0; i < students.length; i++) {
       
         arr.push(parseInt(students[i].innerText));
       
    }

     arr.sort((a, b) => a - b);
     console.log(arr);

    for (let j = 0; j < arr.length; j++) {
        
        let element = students[j].innerText;

        element = arr[j];
        console.log(element);

        students[j].innerText = element;
       
     }

    console.log(students);

    
    })


let themeCol = document.getElementById('third_column');

themeCol.addEventListener('click', function (event) {


    let students = document.querySelectorAll('.theme');

    let arr = [];

    for (let i = 0; i < students.length; i++) {

        arr.push(students[i].innerText);

    }

    arr.sort();
    console.log(arr);

    for (let j = 0; j < arr.length; j++) {

        let element = students[j].innerText;

        element = arr[j];
        console.log(element);

        students[j].innerText = element;

    }

    console.log(students);


})


 // 3  Создать HTML - страницу с блоком текста в рамочке.Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.


 let container = document.querySelector('.container');

container.onmousedown = function (event) {
    event.preventDefault()

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    let x = 148;
    let y = 426;

    function onMouseMove(event) {
        let newY = event.clientY - y;
        let newX = event.clientX - x;

        if (newY <= 0 || newX <= 0) {
            container.style.height = 100 + 'px';
            container.style.width = 150 + 'px';

        }else{
            container.style.height = 100 + newY + 'px';
            container.style.width = 150 + newX + 'px';
        }
    }



    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

}
