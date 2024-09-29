

const btn = document.querySelector("#ingresar")
let texto = document.querySelector("#texto")

btn.addEventListener("click", ()=>{
    const valor1 = document.querySelector("#valor1").value
    const valor2 = document.querySelector("#valor2").value
    const valor3 = document.querySelector("#valor3").value
    const valores = valor1 + valor2 + valor3

    if(valores === '911'){
       return texto.textContent = "password 1 correcto" 
    } else if(valores === '714'){
       return texto.textContent = "password 2 es correcto"
    } else {
        return texto.textContent = "password incorrecto"
    }
})

