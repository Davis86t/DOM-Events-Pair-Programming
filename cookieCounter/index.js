
/// Increment count displayed with each click of cookieImage

const cookieImage = document.querySelector("#cookieImage");
const belowTitle = document.querySelector("section");
let i = 0;

function counterUp() {
  const counter = document.querySelector("#counter");
  i++
  counter.textContent = i;
  belowTitle.append(counter);
}

cookieImage.addEventListener('click', counterUp);