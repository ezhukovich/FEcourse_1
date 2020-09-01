class Parent {
    constructor(_color_skin, _gender, _name) {
        this.color_skin = _color_skin;
        this.gender = _gender;
        this.name = _name;
    }
    say_hi() {
        // return ` say: ${this.name }`;
        console.log(` Hello  ${this.name} your skin is ${this.color_skin}`);
    }

    
}


let b = new Parent('white', 'male', 'Petya');

console.log(b.say_hi());


class Child extends Parent {
    constructor(_color_skin, _gender, _name, childAge) {
        super(_color_skin, _gender, _name)
        this.age = childAge;
        
    }
    // sayName() {
    //     console.log(`Name;  ${this.name}`);
    // }
    say_hi1() {
        return ` say: ${this.name}`;
    }

    
}

let p = new Child('black', 'male', 'Vasya', '12');

console.log(p.say_hi1());