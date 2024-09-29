
const texto = document.querySelector(".footer_text")
const btn_verificar = document.querySelector(".footer_btn")

btn_verificar.addEventListener('click', ()=> {
    const sticker1 = Number(document.querySelector("#number1").value)
    const sticker2 = Number(document.querySelector("#number2").value)
    const sticker3 = Number(document.querySelector("#number3").value)
    let suma = sticker1 + sticker2 +sticker3
    
        

    if(suma >= 0 && suma <= 10) {
        texto.textContent = `Llevas ${suma} stickers`
    } else {
        texto.textContent = `Llevas demasiados stickers`
     }
})

