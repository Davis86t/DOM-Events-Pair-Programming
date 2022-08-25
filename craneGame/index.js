const main = document.querySelector("main");
const image = document.querySelector("img");

const up = document.querySelector("#up");
const left = document.querySelector("#left");
const down = document.querySelector("#down");
const right = document.querySelector("#right");

let i = 0;

function moveup() {
i -= 20;
image.style.marginTop = `${i}px`;
}

function moveleft() {
    i -= 20;
    image.style.marginLeft = `${i}px`;
}

function movedown() {
    i += 20;
    image.style.marginTop = `${i}px`;
}

function moveright() {
    i += 20;
    image.style.marginLeft = `${i}px`;
}

up.addEventListener("click", moveup);
left.addEventListener("click", moveleft);
down.addEventListener("click", movedown);
right.addEventListener("click", moveright);