const codeEng = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];
const lowerEng = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const upperEng = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const lowerRus = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const upperRus = ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const shiftEng = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "{", "|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const shiftRus = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const capsShiftEng = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];
const capsShiftRus = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "&#129045", "Shift", "Ctrl", "", "Alt", " ", "Alt", "&#129044", "&#129047", "&#129046", "Ctrl"];

let counter = 0;
let flag = false;
let langToggle = "eng";
const arr = [];
arr.push(...lowerEng);
const container = document.createElement("div");
const keyboard = document.createElement("div");
const title = document.createElement("h1");
const textarea = document.createElement("textarea");
const subtitle = document.createElement("h3");
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
document.querySelector(".container").append(subtitle);

title.innerText = "Virtual Keyboard by Uladzislau Kolbik";
subtitle.innerText = "Press Ctrl+Shift to change language";

function backspace() {
  const ss = textarea.selectionStart;
  const se = textarea.selectionEnd;
  const ln = textarea.value.length;
  if (ss === 0) { counter += counter + 1 } else if (ss === se) {
    textarea.value = textarea.value.substring(0, ss - 1) + textarea.value.substring(se, ln);
    textarea.focus();
    textarea.selectionStart = ss - 1;
    textarea.selectionEnd = ss - 1;
  }
}

function deleter() {
  const ss = textarea.selectionStart;
  const se = textarea.selectionEnd;
  const ln = textarea.value.length;

  if (ss === se) {
    textarea.value = textarea.value.substring(0, ss) + textarea.value.substring(se + 1, ln);
    textarea.focus();
    textarea.selectionStart = ss;
    textarea.selectionEnd = ss;
  }
}

function enterBtn() {
  const ss = textarea.selectionStart;
  const se = textarea.selectionEnd;
  const ln = textarea.value.length;

  if (ss === se) {
    textarea.value = `${textarea.value.substring(0, ss)}\n${textarea.value.substring(se, ln)}`;
    textarea.focus();
    textarea.selectionStart = ss + 1;
    textarea.selectionEnd = ss + 1;
  }
}

function arrowLeft() {
  const ss = textarea.selectionStart;
  const se = textarea.selectionEnd;
  if (ss === 0) { counter += counter + 1 } else if (ss === se) {
    textarea.setRangeText("", textarea.selectionStart, textarea.selectionEnd, "end");
    textarea.focus();
    textarea.selectionStart = ss - 1;
    textarea.selectionEnd = ss - 1;
  }
}

function arrowRight() {
  const ss = textarea.selectionStart;
  const se = textarea.selectionEnd;
  if (ss === se) {
    textarea.setRangeText("", textarea.selectionStart, textarea.selectionEnd, "end");
    textarea.focus();
    textarea.selectionStart = ss + 1;
    textarea.selectionEnd = ss + 1;
  }
}

function tabulation() {
  const ss = textarea.selectionStart;
  const se = textarea.selectionEnd;

  if (ss === se) {
    textarea.setRangeText("    ", textarea.selectionStart, textarea.selectionEnd, "end");
    textarea.focus();
    textarea.selectionStart = ss + 4;
    textarea.selectionEnd = ss + 4;
  }
}

const init = () => {
  let out = "";
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += "<div class='clearfix'></div>";
    }
    out += `<div class ='k-key ${codeEng[i]}' data="${codeEng[i]}">${arr[i]}</div>`;
  }
  document.querySelector("#keyboard").innerHTML = out;

  document.querySelectorAll("#keyboard .k-key").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelectorAll("#keyboard .k-key").forEach((el) => {
        el.classList.remove("active");
      });
      element.getAttribute("data");
      if ((element.classList.value.substring(0, 14) === "k-key CapsLock")) {
        element.classList.toggle("active");
      } else {
        element.classList.add("active");
      }
      const codeKey = element.innerHTML;
      if (codeKey === "Backspace") {
        backspace();
      }
      if (codeKey === "Del") {
        deleter();
      }
      if (codeKey === "Enter") {
        enterBtn();
      }
      if (codeKey === "Tab") {
        tabulation();
      }
      if (codeKey === "🠔") {
        arrowLeft();
      }
      if (codeKey === "🠖") {
        arrowRight();
      }
      if (element.getAttribute("data").includes("Key") || element.getAttribute("data").includes("Dig") || element.getAttribute("data").includes("Backq") || element.getAttribute("data").includes("Minu") || element.getAttribute("data").includes("Equa") || element.getAttribute("data").includes("Brack") || element.getAttribute("data").includes("Backsl") || element.getAttribute("data").includes("Semi") || element.getAttribute("data").includes("Quo") || element.getAttribute("data").includes("Comm") || element.getAttribute("data").includes("Perio") || element.getAttribute("data").includes("Slash") || element.getAttribute("data").includes("Spac")) textarea.setRangeText(codeKey, textarea.selectionStart, textarea.selectionEnd, "end");
    });
  });
  document.querySelectorAll("#keyboard .k-key").forEach((element) => {
    element.addEventListener("mousedown", () => {
      if (element.innerHTML === "Shift") {
        if (arr[15] === "q") {
          arr.splice(0);
          arr.push(...shiftEng);
          init();
        } else if (arr[15] === "й") {
          arr.splice(0);
          arr.push(...shiftRus);
          init();
        } else if (arr[15] === "Q") {
          arr.splice(0);
          arr.push(...capsShiftEng);
          init();
        } else if (arr[15] === "Й") {
          arr.splice(0);
          arr.push(...capsShiftRus);
          init();
        }
      }
    })
    element.addEventListener("mouseup", () => {
      if (element.innerHTML === "Shift") {
        if (arr[15] === "Q") {
          arr.splice(0);
          arr.push(...lowerEng);
          init();
        } else if (arr[15] === "Й") {
          arr.splice(0);
          arr.push(...lowerRus);
          init();
        } else if (arr[15] === "q") {
          arr.splice(0);
          arr.push(...upperEng);
          init();
        } else if (arr[15] === "й") {
          arr.splice(0);
          arr.push(...upperRus);
          init();
        }
      }
      if (element.innerHTML === "CapsLock") {
        if (arr[15] === "Q") {
          arr.splice(0);
          arr.push(...lowerEng);
          init();
          document.querySelector(".CapsLock").classList.remove("activeCaps");
        } else if (arr[15] === "Й") {
          arr.splice(0);
          arr.push(...lowerRus);
          init();
          document.querySelector(".CapsLock").classList.remove("activeCaps");
        } else if (arr[15] === "q") {
          arr.splice(0);
          arr.push(...upperEng);
          init();
          document.querySelector(".CapsLock").classList.add("activeCaps");
        } else if (arr[15] === "й") {
          arr.splice(0);
          arr.push(...upperRus);
          init();
          document.querySelector(".CapsLock").classList.add("activeCaps");
        }
      }
    })
  });
};
init();

const constructorLangArr = () => {
  if (localStorage.getItem("lang") === "eng") {
    arr.splice(0);
    arr.push(...lowerEng);
    init();
  } else if (localStorage.getItem("lang") === "ru") {
    arr.splice(0);
    arr.push(...lowerRus);
    init();
  } else if (localStorage.getItem("lang") === "ENG") {
    arr.splice(0);
    arr.push(...upperEng);
    init();
  } else if (localStorage.getItem("lang") === "RU") {
    arr.splice(0);
    arr.push(...upperRus);
    init();
  }
}
constructorLangArr();

document.onkeydown = (event) => {
  document.querySelector(`#keyboard .k-key[data="${event.code}"]`).classList.add("active");
  const keyLetter = document.querySelector(`#keyboard .k-key[data="${event.code}"]`).innerHTML;
  if (event.code === "Delete") {
    event.stopPropagation()
  } else {
    event.preventDefault();
  }
  if (event.code === "ControlLeft") {
    flag = true;
  }
  if (event.code === "AltLeft" && flag) {
    if (arr[15] === "q") {
      langToggle = "ru";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    } else if (arr[15] === "й") {
      langToggle = "eng";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    } else if (arr[15] === "Q") {
      langToggle = "RU";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    } else if (arr[15] === "Й") {
      langToggle = "ENG";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    }
    document.querySelector(`.${event.code}`).classList.add("active");
  }

  if (event.code === "CapsLock") {
    document.querySelector(".CapsLock").classList.toggle("active");
    if (arr[15] === "q") {
      langToggle = "ENG";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    } else if (arr[15] === "й") {
      langToggle = "RU";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    } else if (arr[15] === "Q") {
      langToggle = "eng";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    } else {
      langToggle = "ru";
      localStorage.setItem("lang", langToggle);
      constructorLangArr();
    }
  }
  if (event.code === "Backspace") {
    backspace();
  }
  if (event.code === "Del") {
    deleter();
  }

  if (event.code === "Enter") {
    enterBtn();
  }

  if (event.code === "Tab") {
    tabulation();
  }

  if (event.code === "ArrowLeft") {
    arrowLeft();
  }

  if (event.code === "ArrowRight") {
    arrowRight();
  }

  if (event.code === "Tab" || event.code === "Delete" || event.code === "Backspace" || event.code === "AltLeft" || event.code === "CapsLock" || event.code === "ShiftLeft" || event.code === "ControlLeft" || event.code === "ControlRight" || event.code === "Enter" || event.code === "AltRight" || event.code === "ArrowRight" || event.code === "ArrowUp" || event.code === "ArrowDown" || event.code === "ArrowLeft" || event.code === "ShiftRight") {
    counter += counter + 1
  } else textarea.setRangeText(keyLetter, textarea.selectionStart, textarea.selectionEnd, "end");

  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    if (arr[15] === "q") {
      arr.splice(0);
      arr.push(...shiftEng);
      init();
    } else if (arr[15] === "й") {
      arr.splice(0);
      arr.push(...shiftRus);
      init();
    } else if (arr[15] === "Q") {
      arr.splice(0);
      arr.push(...capsShiftEng);
      init();
    } else if (arr[15] === "Й") {
      arr.splice(0);
      arr.push(...capsShiftRus);
      init();
    }
    document.querySelector(`.${event.code}`).classList.add("active");
  }
}

document.onkeyup = (event) => {
  if (event.code === "CapsLock") {
    if (arr[15] === "Q" || arr[15] === "Й") {
      document.querySelector(".CapsLock").classList.add("activeCaps");
    }
  } else {
    document.querySelector(`#keyboard .k-key[data="${event.code}"]`).classList.remove("active");
  }
  if (event.code === "ControlLeft") {
    flag = false;
  }
  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    if (arr[15] === "Q") {
      arr.splice(0);
      arr.push(...lowerEng);
      init();
    } else if (arr[15] === "Й") {
      arr.splice(0);
      arr.push(...lowerRus);
      init();
    } else if (arr[15] === "q") {
      arr.splice(0);
      arr.push(...upperEng);
      init();
    } else if (arr[15] === "й") {
      arr.splice(0);
      arr.push(...upperRus);
      init();
    }
  }
}
