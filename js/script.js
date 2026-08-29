/* ============================================================
   PORTFOLIO - script.js
   Tema Minimalista
   ============================================================ */

   document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Menu Mobile ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMobile = document.getElementById('nav-mobile');
    
    if (hamburgerBtn && navMobile) {
      hamburgerBtn.addEventListener('click', () => {
        const isOpen = hamburgerBtn.classList.contains('open');
        
        if (isOpen) {
          hamburgerBtn.classList.remove('open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
          navMobile.classList.remove('open');
        } else {
          hamburgerBtn.classList.add('open');
          hamburgerBtn.setAttribute('aria-expanded', 'true');
          navMobile.classList.add('open');
        }
      });
  
      // Fechar menu ao clicar em um link
      const mobileLinks = navMobile.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          hamburgerBtn.classList.remove('open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
          navMobile.classList.remove('open');
        });
      });
    }
  
    // --- 2. Filtro de Projetos (página Projetos) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.card-projeto');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          // Remover active de todos os botões
          filterButtons.forEach(b => b.classList.remove('active'));
          // Adicionar active no botão clicado
          btn.classList.add('active');
          
          const filterValue = btn.getAttribute('data-filter');
          
          projectCards.forEach(card => {
            if (filterValue === 'all') {
              card.style.display = 'flex';
            } else {
              if (card.getAttribute('data-category') === filterValue) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            }
          });
        });
      });
    }
  
    // --- 3. Atualizar ano no footer ---
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
  });
