
var i = 0;
var delay = 50;
var text = "Programmer";


function identity(){
  if (i < text.length){
    document.getElementById("animation").innerHTML += text.charAt(i);
    i++;
    setTimeout(identity, delay);
  }
}