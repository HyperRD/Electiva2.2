document.getElementById("modo-btn").addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
  this.textContent = document.body.classList.contains("oscuro")
    ? "Modo Claro"
    : "Modo Oscuro";
});
