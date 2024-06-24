let esqueleto = "off";
let esqueletoStop = document.getElementById(".esqueletoquieto"); 
let botonsonido = new Audio("audio/botonbailar.mp3");
let botonaudio = new Audio("audio/SANTIAGO CARDONA - DURO CON LA MUSICA🔥 (VIDEO SET MEXICO) 🇲🇽.mp3");

function bailar() {
    if (esqueleto === "off") {
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        console.log("on");
        botonsonido.play();
        botonaudio.play(); 
        
    } else {
        esqueleto = "off";
        esqueletoStop.classList.remove("on");
        console.log("off");
        botonaudio.pause(); 
    }
}
