// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderTechStack();
    renderProjects();
    initTheme();
    initMobileMenu();
    initScrollAnimations();
    initForm();
    document.getElementById('year').textContent = new Date().getFullYear();
});

