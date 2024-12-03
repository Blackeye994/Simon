let boxColor = ["violet", "purple", "yellow", "blueviolet"];

let user = [];
let Simon = [];
let eventTriggered = false;
let level = 0;

let btn = document.querySelector(".btn");

// Event listener for starting the game on touch or click
btn.addEventListener("pointerdown", (event) => {
    if(level == 0){
        btn.disabled = true;
        startChange();
    }
    
});

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
    if (user[index] === Simon[index]) {
        if (user.length === Simon.length) {
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

    // Add event listeners for the current level
    for (let box of box_containers) {
        box.addEventListener("pointerdown", ColorChanges);
    }
}

function reset() {
    level = 0;
    user = [];
    Simon = [];
    eventTriggered = false;
    let h2 = document.querySelector("h2");
    h2.innerText = "Press the button to start the game"; // Reset message
    btn.disabled = false;
}