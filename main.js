let PI = 3.14;
let rayon;
let perimetre;
let i = 0

function redcorner(id){
  setTimeout(() => {
    id.style.border = "2px solid orangered"
  },100)
  setTimeout(() => {
    id.style.border = "1px solid"
  },1000)
}

document.getElementById("submit").onclick = function () {
  rayon = document.getElementById("rayon").value;
  if (rayon == "") {
    window.alert("Renseignez un rayon !");
    redcorner(document.getElementById("rayon"));
  } 
  else {
    rayon = Number(rayon);
    if (isNaN(rayon)){
      window.alert("Renseignez un Nombre !");
      redcorner(document.getElementById("rayon"));
      document.getElementById("rayon").value = "";
      document.getElementById("result").textContent = "";
    }
    else{
      perimetre = 2 * PI * rayon;
    document.getElementById("result").textContent = perimetre + " cm";
    setTimeout(() => {
        let logArea= document.getElementById("logs")
        // logArea.textContent += `${i} - Rayon: ${rayon}cm, Périmètre: ${perimetre} `
        logArea.innerHTML += `<p class="para"><strong>${i}</strong>) Rayon: <strong>${rayon}cm</strong><br>Périmètre: <u><i><strong>${perimetre}</strong></i></u></p><br>`
        document.getElementById("rayon").value = "";
        document.getElementById("result").textContent = "";
    }, 1000);
    };
    i+=1
  }
};

document.getElementById("reset").onclick = function (){
  document.getElementById("logs").innerHTML=""
  
}


