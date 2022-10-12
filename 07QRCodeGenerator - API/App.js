var main = document.querySelector(".main");
var generateBtn = document.querySelector(".submit");
var qrInput = document.querySelector(".data");
var qrImg = document.querySelector("#img");

generateBtn.onclick = function () {      
  if(qrInput.value.length > 0){ 
    generateBtn.innerText = "Generating QR Code..."       
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data="+qrInput.value;
    qrImg.onload = function () {
        main.classList.add("active");
      generateBtn.innerText = "Generate QR Code";
    }
  }
}