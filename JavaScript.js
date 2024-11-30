// let boxColor = ["brown", "purple", "yellowgreen", "blueviolet"];

// let user = [];
// let Simon = [];

// let level = 0;
// let key = false;

// let body = document.querySelector("body");
// body.addEventListener("keydown", function () {
//     if (key == false) {
//         startChange();
//         key = true;
//     }
// })

// function randChangeColor(rand) {
//     rand.classList.add("color");
//     setTimeout(() => {
//         rand.classList.remove("color");
//     }, 1000);
// }

// function ColorChanges() {
//     let button = this;
//     console.log(this);
//     let color = this.getAttribute("id");
//     //    console.log(color);
//     randChangeColor(button);

//     user.push(color);
//     console.log(user);

//     check(user.length - 1);
// }

// function check(index) {
//     if (user[index] == Simon[index]) {
//         if (user.length == Simon.length) {
//             startChange();
//         }

//     } else {
//         let h2 = document.querySelector("h2");
//         h2.innerHTML = `Game over! Your score is <b>${level}<b> <br>Press any key! To start the Game`;
//         reset();
//     }
// }

// function startChange() {
//     user = [];
//     level++;
//     let h2 = document.querySelector("h2");
//     h2.innerText = `Level ${level}`;

//     let index = Math.floor(Math.random() * 4);
//     let randomColor = boxColor[index];
//     console.log(randChangeColor);
//     let box_choice = document.querySelector(`.${randomColor}`);

//     randChangeColor(box_choice);

//     Simon.push(randomColor);
//     console.log(Simon);

//     let box_containers = document.querySelectorAll(".box");
//     for (box of box_containers) {
//         box.addEventListener("click", ColorChanges);
//     }
// }

// function reset() {
//     level = 0;
//     user = [];
//     Simon = [];
//     key = false;
// }

let boxColor = ["brown", "purple", "yellowgreen", "blueviolet"];

let user = [];
let Simon = [];
let eventTriggered = false;
let level = 0;


let body = document.querySelector("body");

// Event listener for starting the game on touch or click
body.addEventListener("touchstart", (event)=>{
    if(eventTriggered == false){
        startGame(event);
    }
});

body.addEventListener("click", (event)=>{
    if(eventTriggered == false){
        startGame(event);
    }
});

body.addEventListener("keydown", (event)=>{
    if(eventTriggered == false){
        startGame(event);
    }
});

function startGame(event) {
    if(eventTriggered == false){
        eventTriggered = event.type;
        console.log(eventTriggered);
        startChange();
    }
 
}

function randChangeColor(rand) {
    rand.classList.add("color");
    setTimeout(() => {
        rand.classList.remove("color");
    }, 1000);
}

function ColorChanges() {
    let button = this;
    let color = this.getAttribute("id");
    randChangeColor(button);
    console.log(color);
    user.push(color);
    check(user.length - 1);
}

function check(index) {
    if (user[index] == Simon[index]) {
        if (user.length == Simon.length) {
            startChange(); 
        }
    } else {
        let h2 = document.querySelector("h2");
        h2.innerHTML = `Game over! Your score is <b>${level}</b> <br>Press any key or click to restart the Game`; 
        reset();
    }
}

function startChange() {
    user = [];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = `Level ${level}`;

    let index = Math.floor(Math.random() * 4);
    let randomColor = boxColor[index];
    let box_choice = document.querySelector(`.${randomColor}`);

    randChangeColor(box_choice);
    Simon.push(randomColor);

    let box_containers = document.querySelectorAll(".box");
 
        for (box of box_containers) {
            console.log("Hello world!");
            if(eventTriggered == "touchstart"){
                console.log(" am in the touch");
                box.addEventListener("touchstart", ColorChanges);
            }else{
                console.log("I am in the click and key pressing ");
                box.addEventListener("click", ColorChanges);
            }
        }
}

function reset() {
    level = 0;
    user = [];
    Simon = [];
    // eventTriggered = false;
}



