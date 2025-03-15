 document.getElementById("play-Button").addEventListener("click", function () {
   let videoContainer = document.getElementById("videoContainer");
  let video = videoContainer.querySelector("video");

   if (videoContainer){
       if (videoContainer.style.display === "none" || videoContainer.style.display === ""){
        videoContainer.style.display = "block";
        video.play();
    }else{
        videoContainer.style.display = "none";
       video.pause();
    }
}
});

document.addEventListener("DOMContentLoaded", function () {
  const emojis = ["🎀"]; // Variação de símbolos
  const numEmojis = 14; // Número de lacinhos no fundo

  for (let i = 0; i < numEmojis; i++) {
      let span = document.createElement("span");
      span.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      span.classList.add("ribbon");

      // Posição aleatória
      span.style.left = Math.random() * 100 + "vw";
      span.style.top = Math.random() * 100 + "vh";

      // Tamanhos variados
      span.style.fontSize = Math.random() * 2 + 2 + "rem";

      // Rotação aleatória
      span.style.transform = `rotate(${Math.random() * 360}deg)`;

      document.body.appendChild(span);
  }
});

//function butao() {
   // alert(videoContainer.play);
//}

//document.getElementById("play-Button").addEventListener("click", function () {
   // const videoContainer = document.getElementById("videoContainer");
 //   videoContainer.classList.remove("hidden");

 //   const video = document.getElementById("trailer");
  //  video.play();
//});