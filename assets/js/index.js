
//capturamos la imagen con clase ".yoda" en la constante "imagen"
const imagen = document.querySelector(".yoda")

//le añadimos un cambio en caso de que el usuario haga click en la imagen
imagen.addEventListener('click', function(){
    //si tiene borde, se lo quitamos
    if(imagen.style.border === "2px solid red"){ 
       
        imagen.style.border = "none"
    } // si no tiene borde, se lo añadimos
    else {
        imagen.style.border = "2px solid red"
    }
})