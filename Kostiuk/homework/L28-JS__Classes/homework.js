// 1  Реализовать класс, описывающий окружность.В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get - свойство, возвращающее радиус окружности;
// set - свойство, устанавливающее радиус окружности;
// get - свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 


class Circle {
    constructor(_r) {
        this.r = _r;
        
    }

    get radius() {
        return [this.r];
    }

    get diametr() {
        return [this.r] * 2;
    }

    set radius(newRadius) {
        [this.r] = [...newRadius];
    }



    calcSquare() {
        console.log(`square: ${this.radius * this.radius * 3.14}`);
        
    }

    calcLength() {
        console.log(`length: ${this.diametr * 3.14}`);

    }
}

let c = new Circle(5);

console.log(c);

console.log(c.radius);

c.radius = [3];

c.calcSquare();

c.calcLength();

console.log(c.diametr);


// 2  2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере(в процентах);
// метод для печати(метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0, 5 % чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 

class Marker {
    constructor(_color, _ink, _string) {
        this.color = _color;
        this.ink = _ink;
        this.string = _string


    }

    writeText(){
        let marker = document.getElementById('marker');
        // console.log(this.string.length);
        let symbolsCanPrint = this.ink / 0.5; 
        let arr = this.string.split('');
        // console.log('symbols:', symbolsCanPrint);
        // console.log(arr);

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == ' '){
                var newsymbolsCanPrint = ++symbolsCanPrint;
            }
        }
       
        if (symbolsCanPrint > this.string.length) {
            marker.innerHTML = this.string;
            marker.style.color = this.color;

        }else{
            for (let i = 0; i < newsymbolsCanPrint; i++) {
                let span = document.createElement('span');
                span.innerHTML = arr[i];
                marker.appendChild(span);
                marker.style.color = this.color;
            }
        }


    }
}

let m = new Marker("orange", 5, "Hello da dadba");

m.writeText();