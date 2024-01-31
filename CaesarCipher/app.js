'use strict';

//Caesar cipher function
function caesarEncrypt(text, shift) {

    var result = '';
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        //code to ensure that character is a letter between a-z
        if (char.match(/[a-z]/i)) {
            var code = text.charCodeAt(i);
            //%26 to wrap around when reaching final letter
            //97 is unicode for lowercase a, 65 is upper case A
            if (char === char.toLowerCase()) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
        }

        result += char;
    }

    return result;
}
//function that will perform decryption
function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, 26 - shift);
}

// Example usage:
var originalText = 'Secret message';
var rotation = 8;

var encryptedText = caesarEncrypt(originalText, rotation);
var decryptedText = caesarDecrypt(encryptedText, rotation);

console.log('Original:', originalText);
console.log('Encrypted:', encryptedText);
console.log('Decrypted:', decryptedText);