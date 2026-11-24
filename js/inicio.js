document.addEventListener("DOMContentLoaded", () => {
  const menuBoton = document.getElementById("hamburguesa");
  const menu = document.getElementById("navMenu");

  if (menuBoton && menu) {
    menuBoton.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("abierto");

      const abierto = menu.classList.contains("abierto");
      menuBoton.setAttribute("aria-expanded", String(abierto));
    });

    const enlaces = document.querySelectorAll("#navMenu a");
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        menuBoton.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !menuBoton.contains(e.target)) {
        menu.classList.remove("abierto");
        menuBoton.setAttribute("aria-expanded", "false");
      }
    });
  }

  // AÑO DEL FOOTER
  const anioEl = document.getElementById("anio");
  if (anioEl) anioEl.textContent = new Date().getFullYear();

  // MODO CLARO / OSCURO - AZULITO CON NARANJA
  const btnTema = document.getElementById("btnTema");
  const temaGuardado = localStorage.getItem("tema") || "dark";
  document.documentElement.setAttribute("data-theme", temaGuardado);
  if (btnTema) btnTema.textContent = temaGuardado === "light" ? "☀️" : "🌙";

  if (btnTema) {
    btnTema.addEventListener("click", () => {
      const actual = document.documentElement.getAttribute("data-theme");
      const nuevo = actual === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nuevo);
      localStorage.setItem("tema", nuevo);
      btnTema.textContent = nuevo === "light" ? "☀️" : "🌙";
    });
  }
});