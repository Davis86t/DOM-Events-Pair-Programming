const para = document.querySelector("p");
para.style.fontsize = "80px";



const enlarge = document.querySelector("#enlarge");
const shrink = document.querySelector("#shrink");



let i = 25;

function increaseFontSize() {
  if (i < 100) {
    
    i += 10;
    para.style.fontSize = `${i}px`;
    
  }
  else {
    para.style.fontSize = "100px";
  }
  /*if (i == 25){
    i += 25;
  } */

}

enlarge.addEventListener("click", increaseFontSize);

function decreaseFontSize() {
  /*if (i == 25){
    i -= 25;
  }*/
  if (i > 0) {

    i -= 10;
    para.style.fontSize = `${i}px`;

  }
  else {
    para.style.fontSize = "1px";
  }

}
shrink.addEventListener("click", decreaseFontSize);