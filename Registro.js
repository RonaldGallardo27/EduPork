function ConfirmarContraseña(event) {
    event.preventDefault();

    const contraseña1 = document.getElementById("password").value;
    const contraseña2 = document.getElementById("confirmPassword").value;
    const mensaje = document.getElementById("mensaje");

    if (contraseña1 === contraseña2) {
        mensaje.textContent = "Registro exitoso. Redirigiendo...";
        mensaje.classList.add("success");
        mensaje.classList.remove("alerta");
        mensaje.style.display = "block";

        setTimeout(() => {
            window.location.href = "Pagina1.html";
        }, 1000);

    } else {
        mensaje.textContent = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
        mensaje.classList.add("alerta");
        mensaje.classList.remove("success");
        mensaje.style.display = "block";
        return false;
    }
}