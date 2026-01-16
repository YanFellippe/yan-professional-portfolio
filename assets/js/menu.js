// --- MENU MOBILE ---
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const icon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuBtnIcon = document.getElementById('menu-btn').querySelector('i');
    navLinks.classList.remove('active');
    menuBtnIcon.className = 'fas fa-bars';
}

// Exportar para uso global
window.closeMenu = closeMenu;

