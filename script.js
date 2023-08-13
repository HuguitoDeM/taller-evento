document.addEventListener("DOMContentLoaded", function(){
    var div = document.getElementById("div");
    function SaludoDiv(){
      alert("Hola! soy un div")
    }

    div.addEventListener("click",SaludoDiv)
})