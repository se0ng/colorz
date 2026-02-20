const html = document.documentElement;
const body = document.body;

// open
document.querySelectorAll('.item').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.add('show');
            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';
        }
    });
});

// close
document.querySelectorAll('.modal-item').forEach(container => {
    container.addEventListener('click', () => {
        container.classList.remove('show');
        html.style.overflow = '';
        body.style.overflow = '';
    });
});

// key Esc
window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-item.show');
        if (activeModal) {
            activeModal.classList.remove('show');
            html.style.overflow = '';
            body.style.overflow = '';
        }
    }
});