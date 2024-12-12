document .addEventListener('DOMContentLoaded', () => {
    const userconsent = confirm("¿Deseas recibir notificaciones?");
    if (userconsent) {
        alert("¡Gracias por aceptar las notificaciones");
    } else {
        alert("No recibirás notificaciones.");
    }
})

document .addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector ('form');
    const emailinput = document.querySelector('input[type="email"]');
    const passwordinput = document.querySelector ('input[type="password"]');

    form.addEventListener('submit', (event) => {
        if (!emailinput.ariaValueMax.trim() || !passwordinput.ariaValueMax.trim ()) {
            event.preventDefault(); 
            alert("Por favor, completa todos los campos antes de continuar.");
        }
    })
})