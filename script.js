let count = 0;

const button = document.getElementById('btnCambiar');
const display = document.getElementById('textoDiv');

button.addEventListener('click', () => {
    count++;
    display.textContent = `Botó premut: ${count} cops`;
    if (count >= 10) {
        alert("Surprise Joaquim!");
    }
});