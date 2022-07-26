// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
// ===========================
const ref = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
const textSpanDef = "Anonymous";

function valueInput(event) {
  event.currentTarget.value === ""
    ? (ref.span.textContent = textSpanDef)
    : (ref.span.textContent = event.currentTarget.value);
}
ref.input.addEventListener("input", valueInput);
