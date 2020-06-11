var playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];




// console.log(list);

let getSongs = (playList) =>  {
    let list = document.getElementById('ordered_list');

    for (let j = 0; j < playList.length; j++) {
        let element = document.createElement("li");
        let element1 = document.createElement("li");
        element.innerHTML = playList[j].song;
        element1.innerHTML = `${j+1}) Author:   ${playList[j].author}`;
        
        list.appendChild(element1);
        list.appendChild(element);
        
    }
   
}

getSongs(playList);






function openModal() {
    // var element = document.getElementById("modal");
    let element = document.querySelector('.modal');
    console.log(element);
  
    element.classList.add("active");
    element.style.backgroundColor = "green";
    
}

function closeModal() {
    // var element = document.getElementById("modal");
    let element = document.querySelector('.modal');
    console.log(element);

    element.classList.remove("active");
}


function changeColor() {
    
     let list = document.getElementById("traffic_light");
    
     let ar = list.childNodes;
       for (let i = 0; i < ar.length; i++) {
           let element = ar[i];
           if( element.className == "item activeted"){
               
               element.classList.remove("activeted");
               var active = element;
           }
            
       }

//    тринарний оператор

    active.nextElementSibling != null ? active.nextElementSibling.classList.add("activeted") : document.getElementById("red").classList.add("activeted");
//    тринарний оператор

//    if (active.nextElementSibling != null) {
//     active.nextElementSibling.classList.add("activeted");
//     console.log(list.childNodes);
//     }
//     else{
//     let first = document.getElementById("red");
//     first.classList.add("activeted");
//     }
                 
}



