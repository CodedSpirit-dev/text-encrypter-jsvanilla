/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

function getInputValue(id) { // Get the value of an input field by id
    return document.getElementById(id).value; // Return the value of the input field
}

function encrypt(text) {
    let encryptedText = text.replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return decryptedText;
}

function processText(text, operation) {
    const resultElement = document.getElementById('result');
    let processedText;

    if (operation === 'encrypt') {
        processedText = encrypt(text);
    } else {
        processedText = decrypt(text);
    }

    resultElement.innerHTML = processedText;
    resultElement.classList.add('result'); // Agrega la clase 'result' al elemento resultante
}

// Add click event listeners to the encrypt and decrypt buttons
document.getElementById('encryptButton').addEventListener('click', (event) => {
    event.preventDefault();
    const text = getInputValue('textWithoutEncrypt');
    processText(text, 'encrypt');
});

document.getElementById('decryptButton').addEventListener('click', (event) => {
    event.preventDefault();
    const text = getInputValue('textWithoutEncrypt');
    processText(text, 'decrypt');
});

// Function to copy text
function copyText() {
    const text = document.getElementById('result').innerHTML;
    navigator.clipboard.writeText(text).then(() => {
        alert('El texto se ha copiado a tu portapapeles.');
    }).catch((error) => {
        console.error('Error:', error);
    });
}

document.getElementById('copyButton').addEventListener('click', copyText);
