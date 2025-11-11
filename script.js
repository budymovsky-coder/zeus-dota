// Добавляет текущий год в футер
document.getElementById("year").textContent = new Date().getFullYear();

// Эффект грома
document.addEventListener("click", () => {
  const flash = document.createElement("div");
  flash.className = "flash";
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 200);
});