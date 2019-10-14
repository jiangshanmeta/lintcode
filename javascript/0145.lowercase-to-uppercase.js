/**
 * @param character: a character
 * @return: a character
 */
const lowercaseToUppercase = function (character) {
    return String.fromCharCode(character.charCodeAt(0)-32)
}