let display = document.getElementById("display");
let historyList = document.getElementById("history-list");


function appendValue(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = '';
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}


document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


document.addEventListener("keydown", (e) => {
  if ((e.key >= 0 && e.key <= 9) || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});


function copyResult() {
  navigator.clipboard.writeText(display.value);
  alert("Result copied!");
}
