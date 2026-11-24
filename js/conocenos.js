document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburguesa');
  const nav = document.getElementById('navLinks');
  if (burger && nav) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('abierto');
      burger.textContent = nav.classList.contains('abierto') ? '☰' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('abierto');
        burger.textContent = '☰';
      });
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('abierto');
        burger.textContent = '☰';
      }
    });
  }
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  // MODO CLARO / OSCURO - AZULITO CON NARANJA
  const btnTema = document.getElementById("btnTema");
  const temaGuardado = localStorage.getItem("tema") || "dark";
  document.documentElement.setAttribute("data-theme", temaGuardado);
  if (btnTema) btnTema.textContent = temaGuardado === "light" ? "☀️" : "🌙";

  if (btnTema) {
    btnTema.addEventListener("click", function() {
      const actual = document.documentElement.getAttribute("data-theme");
      const nuevo = actual === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nuevo);
      localStorage.setItem("tema", nuevo);
      btnTema.textContent = nuevo === "light" ? "☀️" : "🌙";
    });
  }
});