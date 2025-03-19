let pojazd = document.getElementById("pojazd");

let predkoscPojazdu = 1000;
let maxPredkosc = 1100;
let pozycjaPojazdu = 0;
let animacja;

function zmienPozycje() {
  pozycjaPojazdu += 5;
  pojazd.style.left = pozycjaPojazdu + "px";
}
function startPojazdu() {
  animacja = setInterval(zmienPozycje, predkoscPojazdu);
}
function stopPojazdu() {
  clearInterval(animacja);
}
function reset() {
  stopPojazdu();
  pozycjaPojazdu = 0;
  pojazd.style.left = "0px";
}
