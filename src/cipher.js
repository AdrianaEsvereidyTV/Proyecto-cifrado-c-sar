window.cipher = {
  // ...
  
};
msj = document.getElementById("mensaje");
jump = document.getElementById("desplazar");

function cifrar(){
 let codificado="";
 let mensaje = msj.value;
 let saltos = parseInt(jump.value)%26;
 
 for (i = 0; i < mensaje.length; i++) {
   let determCode = mensaje.charCodeAt(i);

   if (determCode >= 65 && determCode <= 90){
    codificado += String.fromCharCode((determCode - 65 + saltos) % 26 + 65);
    document.getElementById("cifrado").innerHTML = codificado;
    console.log(codificado);
   }else if (determCode >= 97 && determCode <= 122) {
    codificado += String.fromCharCode((determCode - 97 + saltos) % 26 + 97);
    document.getElementById("cifrado").innerHTML = codificado;
    console.log(codificado);
   }else if (determCode === 32) {
    codificado += String.fromCharCode(determCode);
    document.getElementById("cifrado").innerHTML = codificado;
    console.log(codificado);
   }
 }
};
// Se genera una función que nos decodifique
function descifrar(){
 let descifrado = "";
 let mensaje = msj.value;
 let saltos = parseInt(jump.value);
 for (i = 0; i < mensaje.length; i++) {
   let determCode = mensaje.charCodeAt(i); // Determina el mensaje del usuario
  

   if (determCode >= 65 && determCode <= 90){
    descifrado += String.fromCharCode((determCode - 65 - saltos) % 26 + 65);
    document.getElementById("cifrado").innerHTML = descifrado;
    console.log(descifrado);
   }else if (determCode >= 97 && determCode <= 122) {
    descifrado += String.fromCharCode((determCode - 97 - saltos) % 26 + 97);
    document.getElementById("cifrado").innerHTML = descifrado;
    console.log(descifrado);
   }else if (determCode === 32) {
    descifrado += String.fromCharCode(determCode);
    document.getElementById("cifrado").innerHTML = descifrado;
    console.log(descifrado);
   }
 }

};