/* eslint-disable linebreak-style */
/* eslint-disable indent */
function encryptText() {
    const text = document.getElementById('textWithoutEncrypt').value;
    const encryptedText = btoa(text);
    document.getElementById('result').innerHTML = `<p>Texto encriptado: ${encryptedText}</p>`;
}

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    encryptText();
});

module.exports = encryptText;
