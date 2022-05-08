const codeEng = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];
const lowerEng = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const upperEng = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const lowerRus = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const upperRus = ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const shiftEng = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "{", "|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const shiftRus = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const capsShiftEng = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const capsShiftRus = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];

const container = document.createElement("div");
const keyboard = document.createElement("div");
const title = document.createElement("h1");
const textarea = document.createElement("textarea");
container.className = "container";
textarea.name = "textarea-for-keyboard";
textarea.placeholder = "Let's input here some letters";
textarea.id = "input";
keyboard.className = "keyboard";
keyboard.id = "keyboard";

document.querySelector("body").append(container);
document.querySelector(".container").append(title);
document.querySelector(".container").append(textarea);
document.querySelector(".container").append(keyboard);

title.innerText = "Virtual Keyboard by Uladzislau Kolbik";

function init() {
  let out = "";
  for (let i = 0; i < codeEng.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += "<div class='clearfix'></div>";
    }
    out += `<div class ='k-key ${codeEng[i]}' data="${codeEng[i]}">` + `${upperEng[i]}` + "</div>";
  }
  document.querySelector("#keyboard").innerHTML = out;
}
init();