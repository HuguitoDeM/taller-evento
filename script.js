document.addEventListener("DOMContentLoaded", function() {
    let Div = document.getElementById("div");
    let Boton = document.getElementById("boton");

    Boton.addEventListener("click", function(event) {
        alert("Hola!");
        event.stopPropagation();  // Detener la propagación del evento
    });

    Div.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});