document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const nombre = document.getElementById("fname");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Detiene envío automático

        // Validación de nombre vacío
        if (nombre.value.trim() === "") {
            alert("Por favor, ingresá tu nombre.");
            nombre.focus();
            return;
        }

        // Validación de que el nombre solo contenga letras y espacios
        const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!nombrePattern.test(nombre.value.trim())) {
            alert("El nombre solo puede contener letras. No se permiten números ni símbolos.");
            nombre.focus();
            return;
        }

        // Validación de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            alert("Por favor, ingresa un email válido.");
            email.focus();
            return;
        }

        // Validación de mensaje mínimo
        if (mensaje.value.trim().length < 5) {
            alert("El mensaje debe tener al menos 5 caracteres.");
            mensaje.focus();
            return;
        }

        // Si pasó todas las validaciones
        alert("¡Mensaje enviado correctamente!");
        form.reset();
    });
});
