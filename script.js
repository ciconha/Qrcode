function gerarQRCode() {
    let url = document.getElementById("link").value;
    if (url.trim() === "") {
        alert("Por favor, insira uma URL válida!");
        return;
    }

    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; 

    new QRCode(qrcodeContainer, {
        text: url,
        width: 160,
        height: 160,
        colorDark: "#d3e8e8",
        colorLight: "transparent",
        correctLevel: QRCode.CorrectLevel.H,
      
    });


    document.getElementById("qrcode-area").style.display = "block";
}
