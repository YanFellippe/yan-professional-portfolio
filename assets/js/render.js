// --- RENDER FUNCTIONS ---
function renderTechStack() {
    const createCard = (tech) => `
        <div class="tech-item">
            <i class="${tech.icon}"></i>
            <span class="tech-name">${tech.name}</span>
        </div>
    `;

    document.getElementById('tech-languages').innerHTML = techStack.languages.map(createCard).join('');
    document.getElementById('tech-frameworks').innerHTML = techStack.frameworks.map(createCard).join('');
    document.getElementById('tech-databases').innerHTML = techStack.databases.map(createCard).join('');
    document.getElementById('tech-tools').innerHTML = techStack.tools.map(createCard).join('');
    document.getElementById('tech-others').innerHTML = techStack.others.map(createCard).join('');
}

// --- PAGINATION CONFIG ---
const PROJECTS_PER_PAGE = 6;
let currentPage = 1;

function getTotalPages() {
    return Math.ceil(projects.length / PROJECTS_PER_PAGE);
}

function getPaginatedProjects() {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    const end = start + PROJECTS_PER_PAGE;
    return projects.slice(start, end);
}

function createProjectCard(proj) {
    const viewButton = proj.viewLink !== '#' 
        ? `<a href="${proj.viewLink}" class="btn btn-primary project-btn" target="_blank">
            <i class="fas fa-eye"></i> Ver Projeto
           </a>`
        : '';
    
    return `
        <article class="project-card">
            <div class="project-img-wrapper">
                <img src="${proj.img}" alt="${proj.name}" class="project-img" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${proj.name}</h3>
                <p class="project-desc">${proj.desc}</p>
                <div class="project-techs">
                    ${proj.techs.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${viewButton}
                    <a href="${proj.repoLink}" class="btn ${viewButton ? 'btn-secondary' : 'btn-primary'} project-btn" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    const paginatedProjects = getPaginatedProjects();
    
    container.innerHTML = paginatedProjects.map(createProjectCard).join('');
    renderPagination();
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination-container');
    const totalPages = getTotalPages();
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination">';
    
    // Botão Anterior
    paginationHTML += `
        <button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" 
                onclick="changePage(${currentPage - 1})" 
                ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i> Anterior
        </button>
    `;
    
    // Números das páginas
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button class="pagination-btn ${i === currentPage ? 'active' : ''}" 
                        onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    // Botão Próximo
    paginationHTML += `
        <button class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''}" 
                onclick="changePage(${currentPage + 1})" 
                ${currentPage === totalPages ? 'disabled' : ''}>
            Próximo <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    paginationHTML += '</div>';
    paginationHTML += `<p class="pagination-info">Página ${currentPage} de ${totalPages} (${projects.length} projetos)</p>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = getTotalPages();
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProjects();
    
    // Scroll suave para o topo da seção de projetos
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Exportar para uso global
window.changePage = changePage;

