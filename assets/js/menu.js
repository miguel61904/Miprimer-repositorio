const contact = document.querySelector('#contacto');
contact.addEventListener('click', () =>{
    alert("esta es mi información:\nCelular: 3154741259\nCorreo: miguelon1230.mf@gmail.com");
})



window.addEventListener("scroll", function(){
    let animacion1 = document.getElementById("mifoto2");
    let posicion = animacion1.getBoundingClientRect().top;
    console.log(posicion);
    let tamanoPantalla = window.innerHeight / 3.5; 
    if(posicion < tamanoPantalla){
        animacion1.style.animation = 'mifoto2 1s '
    }
})