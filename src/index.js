let string = document.getElementById("mensaje");
let offset = document.getElementById("desplazar");
let msjCode = document.getElementById("cifrado");
let resultadoCode = document.getElementById("buttonA");
let resultadoDecode= document.getElementById("buttonB");
let offsetHackerEdition = 33; 

resultadoCode.addEventListener("click", codifiction);
 function codifiction () {     
msjCode.innerHTML = window.cipher.encode(offset.value, string.value)
}

resultadoDecode.addEventListener("click", decofiction);
function decofiction () {
msjCode.innerHTML = window.cipher.decode( offset.value,string.value)
}


