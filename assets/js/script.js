document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right"); // Seleciona todos os elementos com as classes 'reveal', 'reveal-left' e 'reveal-right'

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Adiciona a classe 'show' quando o elemento entra na viewport
      }
    });
  }, { threshold: 0.3 }); // Ajuste o threshold conforme necessário

  elements.forEach(el => observer.observe(el)); // Observa cada elemento selecionado
});

// Mock data
const personalInfo = {
    name: "Jean",
    title: "Desenvolvedor Front-End",
    email: "jeansilvax1697@gmail.com",
    location: "Brasil",
    bio: "Desenvolvedor front-end apaixonado por criar experiências web incríveis e interfaces modernas. Especializado em transformar designs em código limpo e funcional, com foco em performance e usabilidade."
};

const skills = [
    {
        id: 1,
        name: "HTML5",
        level: 90,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        description: "Estruturação semântica e acessível"
    },
    {
        id: 2,
        name: "CSS3",
        level: 85,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`,
        description: "Styling moderno com Flexbox, Grid e animações"
    },
    {
        id: 3,
        name: "JavaScript",
        level: 50,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
        description: "ES6+, manipulação DOM e APIs"
    },
    {
        id: 4,
        name: "PHP",
        level: 30,
        icon: `<svg width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path fill="#444444" d="M10.372 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.822 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM8.871 17.894h-1.287l0.536-3.216h1.394c0.75 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251zM17.555 13.069h-1.93l0.429-2.251h-2.037l-1.715 8.684h2.037l0.965-4.824h1.608c0.751 0 0.751 0.322 0.643 0.858l-0.75 3.967h2.144l0.75-4.396c0.214-1.072-0.429-1.93-2.144-2.037zM24.738 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.823 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM23.237 17.894h-1.287l0.536-3.216h1.394c0.751 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251z"></path>
        </svg>`,
        description: "Desenvolvimento backend, rotas e integração com MySQL"
}
];

const projects = [
    {
        id: 1,
        title: "Site institucional Empresa de Usinagem",
        description: "Site de apresentação para empresa de usinagem CNC com portfólio de serviços e formulário de contato",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
        image: "assets/image/projetos/valthan.png",
        link: "https://valthan.com.br/",
        bgColor: "#6ea1ffff"
    },
    {
        id: 2,
        title: "Divulgaai",
        description: "Painel administrativo com gráficos e métricas em tempo real",
        technologies: ["HTML5", "JavaScript", "CSS3"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        link: "#",
        bgColor: "#e6a23c"
    },
    {
        id: 3,
        title: "Word Wide Web",
        description: "Desafio no Programa JovemProgramador, referente a criaçaõ do layout de como fosse o primeiro site da história da internet nos dias atuais",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        image: "assets/image/projetos/www.png",
        link: "https://jeantorres1697.github.io/Atv_pub_projeto/#",
        bgColor: "#80fff9"
    },
    {
        id: 4,
        title: "Site de votação Eleitoral com Login",
        description: "Sistema de votação online com autenticação de usuários e contagem de votos em tempo real",
        technologies: ["HTML5", "JavaScript", "CSS3"],
        image: "assets/image/projetos/urna.png",
        link: "https://jeantorres1697.github.io/votacao/",
        bgColor: "#e6a23c"
    },
    {
        id: 5,
        title: "Cards procurados bando do Chapéu de Palha",
        description: "Site de apresentação com cards interativos dos personagens do bando do Chapéu de Palha, com informações e imagens",
        technologies: ["HTML5", "JavaScript", "CSS3"],
        image: "assets/image/projetos/one-piece.png",
        link: "https://jeantorres1697.github.io/onepiece.github.io/",
        bgColor: "#80fff9"
    }
];

const socialLinks = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/jeantorres1697",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jeantorres1697/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
    },
    {
        id: 3,
        name: "Instagram",
        url: "https://www.instagram.com/_jeaansilva/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37a4 4 0 1 1-7.152 -1.373A4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
        </svg>`
    },
    {
        id: 4,
        name: "Email",
        url: "mailto:jeansilvax1697@gmail.com",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`
    }
];

const highlights = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        title: 'Código Limpo',
        description: 'Desenvolvimento com boas práticas e padrões modernos'
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`,
        title: 'Design Moderno',
        description: 'Interfaces atraentes e experiências intuitivas'
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
        title: 'Foco em Resultados',
        description: 'Soluções que agregam valor real ao negócio'
    }
];

// Initialize page
function init() {
    // Update personal info
    document.getElementById('heroName').textContent = personalInfo.name;
    document.getElementById('heroTitle').textContent = personalInfo.title;
    document.getElementById('aboutBio').textContent = personalInfo.bio;
    document.getElementById('footerName').textContent = personalInfo.name;

    // Render highlights
    renderHighlights();
    
    // Render skills
    renderSkills();
    
    // Render projects
    renderProjects();
    
    // Render contact details
    renderContactDetails();
    
    // Render social links
    renderSocialLinks();
    
    // Setup form
    setupContactForm();
    
    // Setup scroll header
    setupScrollHeader();
}

// Render highlights
function renderHighlights() {
    const container = document.getElementById('highlights');
    container.innerHTML = highlights.map(item => `
        <div class="highlight-item">
            <div class="highlight-icon">
                ${item.icon}
            </div>
            <div class="highlight-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Render skills
function renderSkills() {
    const container = document.getElementById('skillsGrid');
    container.innerHTML = skills.map((skill, index) => `
        <div class="skill-card" style="animation-delay: ${index * 0.1}s">
            <div class="skill-icon">
                ${skill.icon}
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-progress">
                <div class="progress-header">
                    <span class="progress-label">Proficiência</span>
                    <span class="progress-value">${skill.level}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${skill.level}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render projects
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    container.innerHTML = projects.map(project => `
        <div class="project-card" onclick="window.open('${project.link}', '_blank')">
            <img src="${project.image}" alt="${project.title}" class="project-image" />
            <div class="project-content" style="background-color: ${project.bgColor}">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render contact details
function renderContactDetails() {
    const container = document.getElementById('contactDetails');
    container.innerHTML = `
        <div class="contact-detail-item">
            <div class="contact-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <span class="contact-detail-text">${personalInfo.email}</span>
        </div>
        <div class="contact-detail-item">
            <div class="contact-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <span class="contact-detail-text">${personalInfo.location}</span>
        </div>
    `;
}

// Render social links
function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    container.innerHTML = socialLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${link.name}">
            ${link.icon}
        </a>
    `).join('');
}

// Setup contact form
/*function setupContactForm() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("assets/php/sendmail.php", {
                method: "POST",
                body: formData
            });

        const result = await response.json();

        if (result.status === "success") {
            messageDiv.textContent = result.message;
            messageDiv.className = "form-message success";
            form.reset();
        } else {
            messageDiv.textContent = result.message;
            messageDiv.className = "form-message error";
        }
        } catch (error) {
            messageDiv.textContent = "Erro de comunicação com o servidor.";
            messageDiv.className = "form-message error";
        }
    });
}*/
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/SEU_EMAIL_AQUI", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                messageDiv.textContent = "Mensagem enviada com sucesso!";
                messageDiv.className = "form-message success";
                form.reset();
            } else {
                messageDiv.textContent = "Ocorreu um erro ao enviar.";
                messageDiv.className = "form-message error";
            }

        } catch (error) {
            messageDiv.textContent = "Erro de comunicação com o servidor.";
            messageDiv.className = "form-message error";
        }
    });
}



// Setup scroll header
function setupScrollHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

