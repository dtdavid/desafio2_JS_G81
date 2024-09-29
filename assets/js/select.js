
//capturamos el botón que va a escuchar el click
const btn = document.querySelector("#ingresar")
//capturamos el párrafo que queremos cambiar
let texto = document.querySelector("#texto")
//al hacer click en el botón comprobamos el valor de los select
btn.addEventListener("click", ()=>{
    const valor1 = document.querySelector("#valor1").value
    const valor2 = document.querySelector("#valor2").value
    const valor3 = document.querySelector("#valor3").value
    //sumamos los select y nos dará un string
    const valores = valor1 + valor2 + valor3
    //según el valor del string, cambiaremos el texto
    if(valores === '911'){
       return texto.textContent = "password 1 correcto" 
    } else if(valores === '714'){
       return texto.textContent = "password 2 es correcto"
    } else {
        return texto.textContent = "password incorrecto"
    }
})

