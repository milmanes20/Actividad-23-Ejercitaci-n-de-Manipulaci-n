console.log("Hello, World!");

window.onload = function() {
    // Selecciona el botón y el cuerpo del documento.
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Función para actualizar el texto del botón
    function updateButtonText() {
        if (body.classList.contains("dark")) {
            themeToggleButton.textContent = "Tema Claro";
        } else {
            themeToggleButton.textContent = "Tema Oscuro";
        }
    }

    // Llama a la función al cargar la página para establecer el texto inicial.
    updateButtonText();

    // Agrega un event listener al botón.
    themeToggleButton.addEventListener("click", () => {
        // Alterna la clase 'dark' en el body.
        body.classList.toggle("dark");

        // Llama a la función para actualizar el texto del botón después del cambio.
        updateButtonText();
    });
}