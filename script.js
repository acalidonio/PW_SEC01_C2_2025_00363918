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

  if (currentColor === "rgb(145, 0, 0)") {
    subtitle.style.color = "#000000ff";
    text.style.color = "#000000ff";
  } else {
    subtitle.style.color = "#910000ff";
    text.style.color = "#dd0000ff";
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
