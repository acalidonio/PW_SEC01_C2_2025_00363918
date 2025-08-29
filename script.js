// script.js

function changeTitle() {
  const title = document.getElementById("title");
  if (title.innerText === "HTML & CSS: Curso práctico avanzado") {
    title.innerText = "HTML & CSS fácil y rápido";
  } else {
    title.innerText = "HTML & CSS: Curso práctico avanzado";
  }
}

function changeDescStyle() {
  const subtitle = document.getElementById("subtitle-description");
  const text = document.getElementById("description-text");

  const currentColor = window.getComputedStyle(subtitle).color;

  if (currentColor === "rgb(248, 209, 209)") {
    subtitle.style.color = "#ffffffff";
    text.style.color = "#ffffffff";
  } else {
    subtitle.style.color = "rgb(248, 209, 209)";
    text.style.color = "rgb(219, 166, 166)";
  }
}

function orderContent() {
  const container = document.querySelector(".columns");
  container.classList.toggle("rows");
}

function addImage() {
  const container = document.getElementById("image");
  if (!container.querySelector("img")) {
    const img = document.createElement("img");
    img.src = "https://placehold.co/200x300/5e0101/ffffff?text=Libro";
    img.alt = "Imagen del libro";
    container.appendChild(img);
  } else {
    container.removeChild(container.querySelector("img"));
  }
}
