<<<<<<< HEAD
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
=======
document.addEventListener('DOMContentLoaded', () => {
    const userConsent = confirm("¿Deseas recibir notificaciones?");
    if (userConsent) {
        alert("¡Gracias por aceptar las notificaciones!");
    } else {
        alert("No recibirás notificaciones.");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    form.addEventListener('submit', (event) => {
        // Validar que ambos campos estén completos
        if (!emailInput.value.trim() || !passwordInput.value.trim()) {
            event.preventDefault(); // Evitar que el formulario se envíe
            alert("Por favor, completa todos los campos antes de continuar.");
        }
    });
});
>>>>>>> 551d2261a1ec0c4a095b27d7fbb615811ddc61db
