const calm = document.querySelector(".calm");
const chaotic = document.querySelector(".chaotic");

const calmAudio = document.getElementById("calmAudio");
const chaoticAudio = document.getElementById("chaoticAudio");

calm.addEventListener("mouseover", function () {
  document.body.classList.add("calmbg");
  calmAudio.play();
});

calm.addEventListener("mouseout", function () {
  document.body.classList.remove("calmbg");
  calmAudio.pause();
});

chaotic.addEventListener("mouseover", function () {
  document.body.classList.add("chaoticbg");
  chaoticAudio.play();
});

chaotic.addEventListener("mouseout", function () {
  document.body.classList.remove("chaoticbg");
  chaoticAudio.pause();
});
