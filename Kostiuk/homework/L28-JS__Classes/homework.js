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
