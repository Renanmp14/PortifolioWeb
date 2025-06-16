// 1° Acha os elementos
const container = document.querySelector(".container");
const btn = document.querySelector("#my-btn");
const qrCodeInput = document.querySelector("#form-qrcode input");
const qrCodeImg = document.querySelector("#qrcode-container img");

// Funções
function generateQRCode() {
    const qrCodeInputValue = qrCodeInput.value;
    btn.innerText = "Gerando...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        btn.innerText = "QRCode gerado!"
    })
}

// Eventos
btn.addEventListener("click", () => {
    generateQRCode();
});