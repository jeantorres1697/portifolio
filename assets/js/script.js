// 1. DICIONÁRIO DE TRADUÇÕES COMPLETO
const translations = {
    pt: {
        "nav-skills": "Habilidades",
        "nav-projects": "Projetos",
        "nav-contact": "Contato",
        "nav-hire": "Contratar",
        "hero-badge": "Desenvolvedor Front-End",
        "hero-title": "Design <span class='highlight'>minimalista</span>, código robusto.",
        "hero-desc": "Desenvolvendo interfaces de alto padrão com foco em usabilidade e performance em Jaraguá do Sul.",
        "btn-work": "Meus Trabalhos",
        "btn-talk": "Vamos conversar?",
        "skills-sub": "Expertise",
        "skills-title": "Minha <span class='highlight-orange'>Stack</span>",
        "proj-sub": "Portfólio",
        "proj-title": "Galeria de <span class='highlight-cyan'>Projetos</span>",
        "contact-title": "Vamos criar algo <span class='highlight'>novo?</span>",
        "contact-desc": "Jaraguá do Sul, SC | Atendimento remoto.",
        "ph-name": "Nome",
        "ph-email": "E-mail",
        "ph-msg": "Sua mensagem...",
        "btn-send": "Enviar Mensagem",
        "skill-html": "Estrutura semântica, SEO e acessibilidade.",
        "skill-css": "Layouts modernos, Grid, Flexbox e animações.",
        "skill-js": "Interatividade, manipulação de DOM e ES6+.",
        "skill-php": "Integração com backend e bancos de dados MySQL.",
        "proj-valthan": "Site institucional de alta performance desenvolvido para uma indústria metalúrgica especializada em soluções CNC.<br><strong>Interface Industrial</strong>: Design moderno focado na apresentação de serviços como Tornearia e Corte a Laser.<br><strong>Conversão B2B</strong>: Fluxos otimizados para solicitação de orçamentos e contato direto.<br><strong>SEO & Performance</strong>: Estrutura leve e otimizada para buscadores, focada no mercado regional.<br><strong>Site:</strong> <a href='https://valthan.com.br/' target='_blank'>Clique aqui</a>",
        "proj-divulga": "Plataforma completa de classificados desenvolvida para conectar prestadores de serviços autônomos a clientes finais.<br><strong>Ecossistema de Anúncios</strong>: Sistema robusto para criar, editar e gerenciar anúncios com suporte a múltiplas imagens e categorias.<br><strong>Perfil & Avaliações</strong>: Área restrita para profissionais com histórico de serviços e sistema de feedback.<br><strong>UX Responsiva</strong>: Interface intuitiva com busca inteligente por localização e filtros para facilitar a conversão.",
        "proj-onepiece": "Landing page interativa desenvolvida como tributo à tripulação de One Piece, focada em design visual e fluidez.<br><strong>Interface Temática</strong>: Experiência com navegação em carrossel dinâmico para apresentar cada membro do bando.<br><strong>Manipulação de DOM</strong>: Uso de JavaScript para transições suaves, descrições e planos de fundo personalizados.<br><strong>Navegação Responsiva</strong>: Controles intuitivos projetados para oferecer uma visualização detalhada das informações.<br><strong>Site:</strong> <a href='https://jeantorres1697.github.io/onepiece.github.io/'>Clique aqui</a>",
        "proj-www": "Um tributo ao primeiro site da história, recriado com uma estética moderna e minimalista.<br><strong>Conceito Retrô-Futurista</strong>: Design inspirado no layout original de 1991, mas atualizado com componentes modernos.<br><strong>Fundamentos Web</strong>: Projeto focado em semântica pura, demonstrando domínio em acessibilidade e estrutura de dados.<br><strong>Interface Responsiva</strong>: Diferente do original, esta versão é totalmente adaptável a qualquer dispositivo.<br><strong>Site:</strong><a href='https://jeantorres1697.github.io/Atv_pub_projeto/'>Clique aqui</a>",
        "proj-vota": "Simulador de votação dinâmica desenvolvido com foco em manipulação de objetos e estados via JavaScript.<br><strong>Lógica Orientada a Dados</strong>: Sistema estruturado em objetos JS que gerenciam informações de candidatos.<br><strong>Interatividade Fluida</strong>: Renderização dinâmica do DOM que atualiza fotos, nomes e partidos em tempo real.<br><strong>Fluxo de Validação</strong>: Algoritmos de controle para processamento de votos com transições suaves entre as etapas.<br><strong>Site:</strong><a href='https://jeantorres1697.github.io/votacao/'>Clique Aqui</a>",
        "proj-HelpDesk": "Solução personalizada para centralizar o suporte técnico, substituindo processos informais por um fluxo de trabalho inteligente. <br><strong>Dashboards & KPIs</strong>: Painel administrativo com indicadores em tempo real.<br><strong>Linha do Tempo Dinâmica</strong>: Rastreabilidade total com status visual (cores) e sistema de anexos por etapa. <br><strong>Priorização Estratégica</strong>: Gestão por níveis de criticidade para otimizar o tempo de resposta.",
        "proj-gerar-curriculo": "Gerador de currículos profissional focado em padronização e agilidade na criação de documentos profissionais.<br><strong>Automação de Layout</strong>: Transforma dados de formulários em currículos estruturados e prontos para impressão ou PDF.<br><strong>Interface Intuitiva</strong>: Fluxo de preenchimento segmentado para facilitar a organização das informações acadêmicas e profissionais.<br><strong>Design Clean</strong>: Focado em legibilidade e seriedade, seguindo padrões exigidos por recrutadores.<br><strong>Site:</strong> <a href='https://jeantorres1697.github.io/gerar_curriculo/' target='_blank'>Clique aqui</a>",
        "view-project": "VER PROJETO →",
        "view-details": "VER DETALHES →",
        "level-advanced": "Avançado",
        "level-medium": "Médio",
        "level-basic": "Básico"
    },
    en: {
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-hire": "Hire Me",
        "hero-badge": "Front-End Developer",
        "hero-title": "<span class='highlight'>Minimalist</span> design, robust code.",
        "hero-desc": "Developing high-standard interfaces focusing on usability and performance in Brazil.",
        "btn-work": "My Work",
        "btn-talk": "Let's talk?",
        "skills-sub": "Expertise",
        "skills-title": "My <span class='highlight-orange'>Stack</span>",
        "proj-sub": "Portfolio",
        "proj-title": "Project <span class='highlight-cyan'>Gallery</span>",
        "contact-title": "Let's build something <span class='highlight'>new?</span>",
        "contact-desc": "Jaraguá do Sul, Brazil | Remote Work available.",
        "ph-name": "Name",
        "ph-email": "Email",
        "ph-msg": "Your message...",
        "btn-send": "Send Message",
        "skill-html": "Semantic structure, SEO, and accessibility.",
        "skill-css": "Modern layouts, Grid, Flexbox, and animations.",
        "skill-js": "Interactivity, DOM manipulation, and ES6+.",
        "skill-php": "Backend integration and MySQL databases.",
        "proj-valthan": "High-performance institutional website developed for a metallurgical industry specialized in CNC solutions.<br><strong>Industrial Interface</strong>: Modern design focused on showcasing services like Turning and Laser Cutting.<br><strong>B2B Conversion</strong>: Optimized flows for quote requests and direct contact.<br><strong>SEO & Performance</strong>: Lightweight structure optimized for search engines, targeting the regional market.<br><strong>Website:</strong> <a href='https://valthan.com.br/' target='_blank'>Click here</a>",
        "proj-divulga": "Full-stack classifieds platform developed to connect freelance service providers with potential customers.<br><strong>Ad Ecosystem</strong>: Robust system to create, edit, and manage ads with support for multiple images and categories.<br><strong>Profile & Reviews</strong>: Restricted area for professionals featuring service history and a star-rating/comment feedback system.<br><strong>Responsive UX</strong>: Intuitive interface with smart location-based search and advanced filters to drive conversion.",
        "proj-onepiece": "Interactive landing page developed as a tribute to the One Piece crew, focusing on visual design and fluidity.<br><strong>Thematic Interface</strong>: Experience with dynamic carousel navigation to showcase each crew member.<br><strong>DOM Manipulation</strong>: Use of JavaScript for smooth transitions, descriptions, and custom backgrounds.<br><strong>Responsive Navigation</strong>: Intuitive controls designed to provide a detailed view of the information.<br><strong>Website:</strong> <a href='https://jeantorres1697.github.io/onepiece.github.io/'>Click here</a>",
        "proj-www":"A tribute to the first website in history, recreated with a modern and minimalist aesthetic.<br><strong>Retro-Futuristic Concept</strong>: Design inspired by the original 1991 layout, but updated with modern components  .<br><strong>Web Fundamentals</strong>: Project focused on pure semantics, demonstrating mastery in accessibility and data structure.<br><strong>Responsive Interface</strong>: Unlike the original, this version is fully adaptable to any device.<br><strong>Website:</strong><a href='https://jeantorres1697.github.io/Atv_pub_projeto/'>Click here</a>" ,
        "proj-vota": "Dynamic voting simulator developed with a focus on object and state manipulation via JavaScript.<br><strong>Data-Oriented Logic</strong>: Structured system using JS objects to manage candidate information.<br><strong>Fluid Interactivity</strong>: Dynamic DOM rendering that updates photos, names, and parties in real-time.<br><strong>Validation Flow</strong>: Control algorithms for vote processing with smooth transitions between stages.<br><strong>Website:</strong><a href='https://jeantorres1697.github.io/votacao/'>Click here</a>",
        "proj-HelpDesk": "Custom solution to centralize technical support, replacing informal processes with a structured and intelligent workflow.<br><strong>Dashboards & KPIs</strong>: Administrative panel with real-time indicators.<br><strong>Dynamic Timeline</strong>: Full traceability with visual status (colors) and attachment system per stage.<br><strong>Strategic Prioritization</strong>: Criticality level management to optimize response time.",
        "proj-gerar-curriculo": "Professional resume generator focused on standardization and speed in creating career documents.<br><strong>Layout Automation</strong>: Transforms form data into structured resumes ready for printing or PDF export.<br><strong>Intuitive Interface</strong>: Segmented input flow to facilitate the organization of academic and professional information.<br><strong>Clean Design</strong>: Focused on readability and professionalism, following standards required by recruiters.<br><strong>Website:</strong> <a href='https://jeantorres1697.github.io/gerar_curriculo/' target='_blank'>Click Here</a>",
        "view-project": "VIEW PROJECT →",
        "view-details": "VIEW DETAILS →",
        "level-advanced": "Advanced",
        "level-medium": "Intermediate",
    }
};

let currentLang = 'pt';

// 2. DADOS DOS PROJETOS E SKILLS
const allProjects = [
    { id: "proj-valthan", 
        title: "Valthan Usinagem", 
        tech: ["HTML", "PHP", "JS"], 
        img: "assets/image/projetos/Valthan/tela_inicial.png", 
        type: "modal",
        gallery: [
            "assets/image/projetos/Valthan/tela_inicial.png",
            "assets/image/projetos/Valthan/servicos.png"
          ]
    },
    { id: "proj-divulga", 
        title: "Shout Work", 
        tech: ["PHP", "MySQL", "JS"], 
        img: "assets/image/projetos/ShoutWork/tela_inicial.png", 
        type: "modal", 
        gallery: [
                    "assets/image/projetos/ShoutWork/tela_inicial.png",
                    "assets/image/projetos/ShoutWork/carrousel_anuncio.png",
                    "assets/image/projetos/ShoutWork/cards.png",
                    "assets/image/projetos/ShoutWork/ver_mais.png",
                    "assets/image/projetos/ShoutWork/modal_cards.png",
                    "assets/image/projetos/ShoutWork/tela_login.png",
                    "assets/image/projetos/ShoutWork/cadastro_usuario.png",
                    "assets/image/projetos/ShoutWork/perfil_usuario.png",
                    "assets/image/projetos/ShoutWork/categorias_anuncio.png",
                    "assets/image/projetos/ShoutWork/criar_anuncio.png",
                    "assets/image/projetos/ShoutWork/meus_anuncios.png",
                    "assets/image/projetos/ShoutWork/editar_anuncio.png"
        ] 
    },
    { id: "proj-www", 
        title: "World Wide Web", 
        tech: ["HTML", "CSS", "JS"], 
        img: "assets/image/projetos/www/www.png", 
        type: "modal", 
        gallery: [
            "assets/image/projetos/www/www.png" 
        ]
    },
    { id: "proj-vota", 
        title: "Votação Eleitoral", 
        tech: ["HTML", "CSS", "JS"], 
        img: "assets/image/projetos/Votacao/vereador_digitado.png", 
        type: "modal", 
        gallery: [
            "assets/image/projetos/Votacao/inicio.png",
            "assets/image/projetos/Votacao/eleitor_cadastrado.png",
            "assets/image/projetos/Votacao/novo_eleitor.png",
            "assets/image/projetos/Votacao/vereador.png",
            "assets/image/projetos/Votacao/vereador_digitado.png",
            "assets/image/projetos/Votacao/prefeito.png",
            "assets/image/projetos/Votacao/prefeito_digitado.png",
            "assets/image/projetos/Votacao/apuracao.png"
        ] 
    },
    { id: "proj-onepiece", 
        title: "Cards One Piece", 
        tech: ["HTML", "JS", "CSS"], 
        img: "assets/image/projetos/onepiece/luffy.png", 
        type: "modal",
        gallery: [
            "assets/image/projetos/onepiece/luffy.png",
            "assets/image/projetos/onepiece/zoro.png"
        ] 
 
    },
    { id: "proj-HelpDesk", 
        title: "Help Desk", 
        tech: ["PHP", "JS", "CSS", "BOOTSTRAP"], 
        img: "assets/image/projetos/HelpDesk/dashboard.png", 
        type: "modal",
        gallery: [
                "assets/image/projetos/HelpDesk/login.png",
                "assets/image/projetos/HelpDesk/dashboard.png",
                "assets/image/projetos/HelpDesk/categoria_chamados.png",
                "assets/image/projetos/HelpDesk/novo_chamado.png",
                "assets/image/projetos/HelpDesk/lista_chamados.png",
                "assets/image/projetos/HelpDesk/detalhe_chamados.png",
                "assets/image/projetos/HelpDesk/gerenciar_chamados.png",
                "assets/image/projetos/HelpDesk/categoria_prioridade.png",
                "assets/image/projetos/HelpDesk/manutencao_carro.png",
                "assets/image/projetos/HelpDesk/novo_usuario.png",
                "assets/image/projetos/HelpDesk/formato_relatorio.png",
                "assets/image/projetos/HelpDesk/gestao_setores.png",
                "assets/image/projetos/HelpDesk/gestao_usuario.png",
                "assets/image/projetos/HelpDesk/gestao_usuario_categoria.png"
                ]
    },
        { 
        id: "proj-gerar-curriculo", 
        title: "Gerador de Currículo", 
        tech: ["HTML", "CSS", "JS"], 
        img: "assets/image/projetos/GerarCurriculo/index.png", // Ajuste o caminho da imagem aqui
        type: "modal",
        gallery: [
            "assets/image/projetos/GerarCurriculo/index.png"
        ] 
    }
];

const skills = [
    { id: "skill-html", 
        name: "HTML5", 
        level: "level-advanced" 
    },
    { id: "skill-css", 
        name: "CSS3", 
        level: "level-advanced" 
    },
    { id: "skill-js", 
        name: "JavaScript", 
        level: "level-medium" 
    },
    { id: "skill-php", 
        name: "PHP", 
        level: "level-medium" 
    }
];

const socialLinks = [
    { id: 1, 
        name: "GitHub", 
        url: "https://github.com/jeantorres1697", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>` 
    },
    { id: 2, 
        name: "LinkedIn", 
        url: "https://www.linkedin.com/in/jeantorres1697/", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>` 
    },
    { id: 3, 
        name: "Instagram", 
        url: "https://www.instagram.com/_jeaansilva/", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37a4 4 0 1 1-7.152 -1.373A4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>` 
    },
    { id: 4, 
        name: "Email", 
        url: "mailto:jeansilvax1697@gmail.com", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>` 
    }
];

// 3. FUNÇÃO DE RENDERIZAÇÃO PRINCIPAL
function render() {
    const navLinksContainer = document.querySelector('.nav-links');
    if (navLinksContainer) {
        navLinksContainer.innerHTML = `
            <a href="#habilidades" data-i18n="nav-skills">${translations[currentLang]["nav-skills"]}</a>
            <a href="#projetos" data-i18n="nav-projects">${translations[currentLang]["nav-projects"]}</a>
            <a href="#contato" data-i18n="nav-contact">${translations[currentLang]["nav-contact"]}</a>
        `;
        navLinksContainer.querySelectorAll('a').forEach(anchor => {
            anchor.onclick = (e) => {
                e.preventDefault();
                scrollToSection(anchor.getAttribute('href').substring(1));
            };
        });
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
    });

    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skills.map(s => `
            <div class="skill-card reveal">
                <div class="skill-badge">${translations[currentLang][s.level]}</div>
                <h3>${s.name}</h3>
                <p>${translations[currentLang][s.id]}</p>
            </div>
        `).join('');
    }

    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = allProjects.map(p => {
            const isModal = p.type === 'modal';
            const actionTrigger = isModal ? `onclick="openProjectModal('${p.id}')"` : `href="${p.link}" target="_blank"`;
            const labelKey = isModal ? "view-details" : "view-project";

            return `
            <div class="project-card reveal">
                <div class="project-img-box">
                    <img src="${p.img}" alt="${p.title}">
                </div>
                <div class="project-info">
                    <h3 style="color: var(--primary); margin-bottom: 10px;">${p.title}</h3>
                    <p style="color: #cbd5e1; font-size: 0.85rem; margin-bottom: 20px; max-height: 45px; overflow: hidden; text-overflow: ellipsis;">
                        ${translations[currentLang][p.id]}
                    </p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
                        ${p.tech.map(t => `<span style="font-size: 0.65rem; background: rgba(128,255,249,0.1); color: var(--primary); padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(128,255,249,0.2);">${t}</span>`).join('')}
                    </div>
                    <a ${actionTrigger} style="color: #fff; text-decoration: none; font-weight: 800; font-size: 0.8rem; letter-spacing: 0.5px; cursor: pointer;">
                        ${translations[currentLang][labelKey]}
                    </a>
                </div>
            </div>`;
        }).join('');
    }

    const socialLinksContainer = document.getElementById('socialLinks');
    if (socialLinksContainer) {
        socialLinksContainer.innerHTML = socialLinks.map(link => `
            <a href="${link.url}" target="_blank" aria-label="${link.name}" class="social-icon">${link.icon}</a>
        `).join('');
    }

    initObserver();
}

// 4. ANIMAÇÃO DE REVELAÇÃO
function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// 5. UTILITÁRIOS
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 100, behavior: "smooth" });
    }
}

// 6. MODAL DE PROJETOS (MySQL/Offline)
function openProjectModal(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');

    if (modal && body) {
        // Injeta o conteúdo dinâmico do projeto
        body.innerHTML = `
            <h2 style="color: var(--primary); margin-bottom: 10px;">${project.title}</h2>
            <p style="color: #cbd5e1; margin-bottom: 15px;">${translations[currentLang][project.id]}</p>
            
            <div class="gallery-wrapper">
                <button class="nav-arrow left" id="prevBtn" onclick="scrollGallery(-1)">❮</button>
                <div class="modal-gallery" id="modalGallery">
                    ${project.gallery.map(img => `<img src="${img}" alt="Screenshot">`).join('')}
                </div>
                <button class="nav-arrow right" id="nextBtn" onclick="scrollGallery(1)">❯</button>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // --- LÓGICA DE ZOOM MOBILE ---
        const galleryImages = body.querySelectorAll('.modal-gallery img');
        galleryImages.forEach(img => {
            img.onclick = () => {
                // Ativa o zoom apenas em dispositivos móveis (largura <= 768px)
                if (window.innerWidth <= 768) {
                    const overlay = document.getElementById('zoomOverlay');
                    const zoomedImg = document.getElementById('zoomedImage');
                    
                    if (overlay && zoomedImg) {
                        zoomedImg.src = img.src;
                        overlay.style.display = 'flex';
                    }
                }
            };
        });
        // -------------------------------------------------------------------------

        // Atualiza a visibilidade das setas laterais
        setTimeout(updateArrows, 10);
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// 7. INICIALIZAÇÃO DO MENU MOBILE
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (hamburger && mobileMenu && closeMenu) {
        hamburger.onclick = () => mobileMenu.classList.add('active');
        closeMenu.onclick = () => mobileMenu.classList.remove('active');
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.onclick = () => mobileMenu.classList.remove('active');
        });
    }
}

// 8. EVENTOS GLOBAIS
window.onload = () => {
    render();
    initMobileMenu();

    const toggleLanguage = () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        [document.getElementById('lang-switch'), document.getElementById('lang-switch-mobile')].forEach(btn => {
            if (btn) btn.innerText = currentLang === 'pt' ? 'EN' : 'PT';
        });
        render();
        initMobileMenu();
        setupLanguageEvents();
    };

    function setupLanguageEvents() {
        const btnD = document.getElementById('lang-switch');
        const btnM = document.getElementById('lang-switch-mobile');
        if (btnD) btnD.onclick = toggleLanguage;
        if (btnM) btnM.onclick = toggleLanguage;
    }

    setupLanguageEvents();

    // Eventos de fechar modal
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) closeBtn.onclick = closeProjectModal;
    window.onclick = (e) => { if (e.target === document.getElementById('projectModal')) closeProjectModal(); };

    document.querySelectorAll('.nav-links a, .logo').forEach(anchor => {
        anchor.onclick = (e) => {
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1) || 'hero');
            }
        };
    });
};


// 9. FUNÇÕES DE NAVEGAÇÃO NA GALERIA DO MODAL
function scrollGallery(direction) {
    const gallery = document.getElementById('modalGallery');
    const scrollAmount = gallery.clientWidth; // Rola exatamente a largura visível
    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
    setTimeout(updateArrows, 300);
}

function updateArrows() {
    const gallery = document.getElementById('modalGallery');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!gallery || !prevBtn || !nextBtn) return;

    // Se o scroll lateral for maior que 10px, mostra a seta esquerda
    prevBtn.style.display = gallery.scrollLeft > 10 ? 'block' : 'none';

    // Se ainda houver conteúdo para rolar à direita, mostra a seta direita
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    nextBtn.style.display = gallery.scrollLeft < maxScroll - 10 ? 'block' : 'none';
}

document.addEventListener('scroll', (e) => {
    if (e.target.id === 'modalGallery') updateArrows();
}, true);


// 10. FECHAR ZOOM MOBILE
const zoomOverlay = document.getElementById('zoomOverlay');
if (zoomOverlay) {
    zoomOverlay.onclick = () => {
        zoomOverlay.style.display = 'none';
    };
}

// 11. BOTÃO DE VOLTAR AO TOPO

window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "flex";
        btn.style.justifyContent = "center";
        btn.style.alignItems = "center";
    } else {
        btn.style.display = "none";
    }
};

// Função para subir ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

// 12. ENVIO DE FORMULÁRIO VIA WEB3FORMS

const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "063bdd8a-dba2-4f5f-bb59-5af2544b4eb9");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});





