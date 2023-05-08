const textArea = document.querySelector(".ingresetexto");
const mensaje = document.querySelector(".mensaje");
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function btnEncriptar(){
    if(textArea.value === ""){
        sintexto();
    } else{
        const textoEncriptado = encriptar(textArea.value);
        displayMensaje(textoEncriptado);
    }
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++ ){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); 
    }}
    return stringEncriptado;
}

function btnDesencriptar(){
    if(textArea.value === ""){
        sintexto();
    }else{
    const textoEncriptado = desencriptar(textArea.value);
    displayMensaje(textoEncriptado);
    }
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); 
    }}
    return stringDesencriptado;
}

function copyText(){
    mensaje.select();
    mensaje.setSelectionRange(0,99999);
    navigator.clipboard.writeText(mensaje.value);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + mensaje.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function sintexto(){
    mensaje.style.display = "none";
    document.querySelector(".btnCopiar").style.display = "none";
    document.querySelector(".noText").style.display = "inherit";
}

function displayMensaje(textoEncriptado){
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.display = "flex";
    document.querySelector(".btnCopiar").style.display = "inherit";
    document.querySelector(".noText").style.display = "none";
}

//toggle
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=>{
document.body.classList.toggle('dark');
});
//toggle code ends