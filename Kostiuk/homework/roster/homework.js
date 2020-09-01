class Roster {
    constructor(_array){
        this.array = _array;
    }

    showList(){
        let divList = document.createElement("DIV");

        for (let i = 0; i < this.array.length; i++){
            let elem = document.createElement('p');
            elem.innerHTML = this.array[i].name + ' ' + this.array[i].status + ' ' + this.array[i].course;
            divList.appendChild(elem);
        }
        document.body.appendChild(divList);
    }
    
}

let array = [
    {
        name: 'Sasha',
        status: 'student',
        course: 'frontend',
    },
    {
        name: 'Vadim',
        status: 'student',
        course: 'frontend',
    },
    {
        name: 'Sveta',
        status: 'student',
        course: 'frontend',
    }

];

let arrayA = new Roster(array);

arrayA.showList();


