const header = document.getElementById("jollibee-header");
const textToType = "Sa Jollibee Bida ang Saya!";
let index = 0;
function typeWriter() {
  if (index < textToType.length) {   
    header.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();