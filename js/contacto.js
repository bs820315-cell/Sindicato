const btn = document.getElementById('menuBoton');
const nav = document.getElementById('navMenu');
if (btn && nav) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('abierto');
    btn.textContent = nav.classList.contains('abierto') ? '✕' : '☰';
  });
}

document.getElementById('anio').textContent = new Date().getFullYear();

// MODO CLARO / OSCURO - BONITO Y QUE SE ACUERDA
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

// FORMULARIO - WHATSAPP Y GMAIL
function obtenerMensaje(){
  const nombre = document.getElementById("nombre")?.value || "";
  const correo = document.getElementById("correo")?.value || "";
  const telefono = document.getElementById("telefono")?.value || "";
  const tipo = document.getElementById("tipo")?.value || "";
  const mensaje = document.getElementById("mensaje")?.value || "";
  return `Hola, soy ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nTipo: ${tipo}\nMensaje: ${mensaje}`;
}

function enviarWhatsApp(){
  const texto = encodeURIComponent(obtenerMensaje());
  // TU WHATSAPP: 246 298 2175
  window.open(`https://wa.me/522462982175?text=${texto}`, '_blank');
}

function enviarGmail(){
  const texto = obtenerMensaje();
  // TU CORREO: alfredomartinezmontiel809@gmail.com
  const tuGmail = "alfredomartinezmontiel809@gmail.com";
  const asunto = encodeURIComponent("Nueva duda o propuesta - Sindicato");
  const cuerpo = encodeURIComponent(texto);
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${tuGmail}&su=${asunto}&body=${cuerpo}`, '_blank');
}

// Evita que el form se recargue si alguien le da Enter
document.getElementById("formQueja")?.addEventListener("submit", function(e){
  e.preventDefault();
  enviarWhatsApp();
});