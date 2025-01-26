
let img = document.querySelector("img")

let clientWidth = document.body.clientWidth;
let clientheight = document.body.clientHeight;
console.log(clientWidth);


function left() {
    let left = Math.random() * 1000;
    img.style.position = "absolute"
    img.style.left = left + "px"
}

function right() {
    let top = Math.random() * 500;
    img.style.top = top + "px"

}


setInterval(() => {
    right();
    left();
}, 10000)



let a = 0;
let b = 0;

function done(value) {
  if (value == 'zombie') {
    a++; 
    console.log('a:', a); 
  }else if ('notzombie'){
      b++; 
       console.log('b:', b); 
  }
 
 
}

done();

window.onload = function() {
  if (audio.paused) {
    audio.play();  
  }
}





