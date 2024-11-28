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
