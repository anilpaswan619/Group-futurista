let i = 0;
let txt = 'Future of Digital Onboarding and Customer Experience Summit for FI 2nd Edition';
let speed = 50;
window.onload = typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("banner-heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}