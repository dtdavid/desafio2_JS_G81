//capturamos el texto que queremos cambiar
const texto = document.querySelector(".footer_text")
//capturamos el botón que escucha el click
const btn_verificar = document.querySelector(".footer_btn")
//al hacer click, capturamos los números de los input
btn_verificar.addEventListener('click', ()=> {
    const sticker1 = Number(document.querySelector("#number1").value)
    const sticker2 = Number(document.querySelector("#number2").value)
    const sticker3 = Number(document.querySelector("#number3").value)
    //sumamos los valores de los input
    let suma = sticker1 + sticker2 +sticker3
    //según la suma de los input, cambiamos el texo
    if(suma >= 0 && suma <= 10) {
        texto.textContent = `Llevas ${suma} stickers`
    } else {
        texto.textContent = `Llevas demasiados stickers`
     }
})

