// === MODAL SCRIPT - MÚLTIPLES MODALES ===

// Abrir un modal específico por su ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Opcional: prevenir scroll
    }
}

// Cerrar un modal específico por su ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Opcional: restaurar scroll
    }
}

// Cerrar modal al hacer clic fuera del contenido
function closeModalOutside(event, modalId) {
    if (event.target.id === modalId) {
        closeModal(modalId);
    }
}

// OPCIONAL: Cerrar modales con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
});