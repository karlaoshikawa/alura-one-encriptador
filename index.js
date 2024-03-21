let encryptButton = document.getElementById("encrypt-button");
let descryptButton = document.getElementById("descrypt-button");
let textInput = document.getElementById("text-input");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const normalizeText = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, "")
    .toLowerCase();
};

const handleIncrypt = (text) => {
  const textBeforeEncrypt = normalizeText(text);
  const textEncrypted = textBeforeEncrypt
    .split("")
    .map((letter) => {
      switch (letter) {
        case "a":
          return "enter";
        case "e":
          return "imes";
        case "i":
          return "ai";
        case "o":
          return "ober";
        case "u":
          return "ufat";
        default:
          return letter;
      }
    })
    .join("");

  return textEncrypted;
};

encryptButton.addEventListener("click", () => {
  const inputValue = textInput.value;
  const text = handleIncrypt(inputValue);
  const textoElement = document.querySelector("h3");
  textoElement.textContent = text;
});


