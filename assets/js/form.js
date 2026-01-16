// --- FORM VALIDATION ---
function initForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Simple validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const error = input.nextElementSibling;
            if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
                isValid = false;
                input.classList.add('invalid');
                error.style.display = 'block';
            } else {
                input.classList.remove('invalid');
                error.style.display = 'none';
            }
        });

        if (isValid) {
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Mensagem Enviada!';
            btn.style.backgroundColor = '#10b981'; // Green
            btn.style.borderColor = '#10b981';
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
            }, 3000);
        }
    });
}

