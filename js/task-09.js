// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// ==========================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColr = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanText = document.querySelector(".color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
  spanText.style.color = getRandomHexColor();

  btnChangeColr.style.backgroundColor = getRandomHexColor();
  btnChangeColr.style.borderColor = getRandomHexColor();
  // btnChangeColr.textContent = `color: ${getRandomHexColor()}`;
};
btnChangeColr.addEventListener("click", changeColor);
console.log(btnChangeColr.style);
