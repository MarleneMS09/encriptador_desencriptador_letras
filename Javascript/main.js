function encriptar() {
  var texto= document.getElementById("inputTexto").value.toLowerCase();
  var txtCifrado = txtCifrado.replace(/e/igm,"enter");
  var txtCifrado = txtCifrado.replace(/o/igm,"ober");
  var txtCifrado = txtCifrado.replace(/i/igm,"imes");
  var txtCifrado = txtCifrado.replace(/a/igm,"ai");
  var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

  document.getElementById("muñeco").style.display="none";
  document.getElementById("texto").style.display="none";
  document.getElementById("texto2").innerHTML=txtCifrado;
  document.getElementById("botoncopiar").style.display= "show";
  document.getElementById("botoncopiar").style.display= "inherit";
}

function desencriptar() {
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = txtCifrado.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"ai");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
  
    document.getElementById("muñeco").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=txtCifrado;
    document.getElementById("botoncopiar").style.display= "show";
    document.getElementById("botoncopiar").style.display= "inherit";
  }

function copy() {
var contenido = querySelector("texto2");
contenido.select();
document.exeCommand("copy");
alert("se copió tu texto"); }
