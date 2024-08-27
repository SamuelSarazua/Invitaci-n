function confirmAttendance() {
    const message = document.getElementById('confirmation-message');
    message.textContent = "¡Gracias por confirmar tu asistencia!";
    message.classList.remove('hidden');
}
