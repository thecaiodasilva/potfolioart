// Função para carregar o conteúdo da página
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            updateActiveLink(page);
            closeSidebar(); // Fechar o menu após selecionar uma opção
        })
        .catch(err => console.error('Erro ao carregar a página:', err));
}

// Função para atualizar o link ativo
function updateActiveLink(page) {
    const navLinks = document.querySelectorAll('.sidebar-nav a, .bottom-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Função para fechar o menu lateral
function closeSidebar() {
    const sidebar = document.getElementById('sidebar-nav');
    sidebar.classList.remove('active');
}

// Carregar a página inicial ao abrir o site
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html');
});

// Navegação pela barra inferior e menu lateral
document.querySelectorAll('.sidebar-nav a, .bottom-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('href');
        loadPage(page);
    });
});

// Menu Hambúrguer (Abrir/Fechar)
document.getElementById('menu-toggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar-nav');
    sidebar.classList.toggle('active');
});

// Script corrigido
document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.querySelector('.photo-modal');
        const modalImg = modal.querySelector('img');
        const src = item.querySelector('img').src;
        const alt = item.querySelector('img').alt;
        
        modalImg.src = src;
        modalImg.alt = alt;
        modal.classList.add('active');
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.photo-modal').classList.remove('active');
});

// Fechar clicando fora da imagem
document.querySelector('.photo-modal').addEventListener('click', (e) => {
    if(e.target === document.querySelector('.photo-modal')) {
        document.querySelector('.photo-modal').classList.remove('active');
    }
});