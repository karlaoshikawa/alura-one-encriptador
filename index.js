let encryptButton = document.getElementById("encrypt-button");
let descryptButton = document.getElementById("descrypt-button");
let textInput = document.getElementById("text-input");
let copyButton = document.getElementById("copy-button");
let textElement = document.querySelector("h3");

let copyMessage;

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
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "a":
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
  textElement.textContent = text;
  textInput.value = "";
});

const handleDescrypt = (text) => {
  const replaceArr = [
    [/enter/g, "e"],
    [/imes/g, "i"],
    [/ai/g, "a"],
    [/ober/g, "o"],
    [/ufat/g, "u"],
  ];

  const textDescrypted = replaceArr.reduce((acc, [regex, replacement]) => {
    return acc.replace(regex, replacement);
  }, text);

  return textDescrypted;
};

descryptButton.addEventListener("click", () => {
  const inputValue = textInput.value;
  const descryptText = handleDescrypt(inputValue);

  textElement.textContent = descryptText;
  textInput.value = "";
});

const copyText = () => {
 let text = textElement.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      copyMessage = "Texto copiado com sucesso"
    })
    .catch((err) => {
      copyMessage = `Falha ao copiar o texto. ${err}`
    });
};

copyButton.addEventListener("click", () => {
  copyText();
  textElement.textContent = "";
  textInput.value = "";
});
