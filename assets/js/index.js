const imagen = document.querySelector(".yoda")


imagen.addEventListener('click', function(){
    if(imagen.style.border === "2px solid red"){ 
       
        imagen.style.border = "none"
    }else {
        imagen.style.border = "2px solid red"
    }
})