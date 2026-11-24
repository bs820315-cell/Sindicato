// MENU MOVIL - SOLO SI EXISTE EN LA PAGINA
const menuBoton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

if (menuBoton && menu) {
  menuBoton.addEventListener("click", () => {
    menu.classList.toggle("abierto");

    // Para que el lector de pantalla sepa si está abierto o cerrado
    const abierto = menu.classList.contains("abierto");
    menuBoton.setAttribute("aria-expanded", abierto);
  });

  // Que se cierre solo cuando le picas a un enlace
  menu.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("abierto");
      menuBoton.setAttribute("aria-expanded", "false");
    });
  });
}

// MODO CLARO / OSCURO - IGUAL QUE CONTACTO
const btnTema = document.getElementById('btnTema');
const temaGuardado = localStorage.getItem('tema') || 'dark';
document.documentElement.setAttribute('data-theme', temaGuardado);
if (btnTema) btnTema.textContent = temaGuardado === 'light' ? '☀️' : '🌙';

if (btnTema) {
  btnTema.addEventListener('click', () => {
    const actual = document.documentElement.getAttribute('data-theme');
    const nuevo = actual === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nuevo);
    localStorage.setItem('tema', nuevo);
    btnTema.textContent = nuevo === 'light' ? '☀️' : '🌙';
  });
}