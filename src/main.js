/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

function getInputValue(id) { // Get the value of an input field by id
    return document.getElementById(id).value; // Return the value of the input field
}

function processText(text, operation) {
    const processedText = operation === 'encrypt' ? btoa(text) : atob(text);
    document.getElementById('result').innerHTML = processedText;
}

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const text = getInputValue('textWithoutEncrypt');
    processText(text, event.submitter.id === 'encryptButton' ? 'encrypt' : 'decrypt');
});

// Function to copy text
function copyText() {
    const text = document.getElementById('result').innerHTML;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch((error) => {
        console.error('Error:', error);
    });
}

document.getElementById('copyButton').addEventListener('click', copyText);