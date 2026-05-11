
const projects = [
    {
        title: "Medi Connect",
        tag: "Application Mobile",
        description: "Medi Connect est une application mobile de reservation medicale concue pour ameliorer l'acces a la prise de rendez-vous medicaux, reduire les delais et simplifier le parcours des patients qui ont du mal a trouver leurs specialistes.",
        objective: "Ameliorer l'acces a la prise de rendez-vous medicaux afin de reduire les delais et de simplifier le parcours des patients. Cible : les patients qui ont du mal a trouver leurs specialistes.",
        tools: ["Figma", "UI Design", "UX Research", "Prototypage"],
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        images: [
            { src: "img/iPhone 14 & 15 Pro Max - 1.png", caption: "Ecran de connexion" },
            { src: "img/iPhone 14 & 15 Pro Max - 2.png", caption: "Page d'accueil" },
            { src: "img/iPhone 14 & 15 Pro Max - 3.png", caption: "Recherche de medecin" },
            { src: "img/iPhone 14 & 15 Pro Max - 4.png", caption: "Details du medecin" },
            { src: "img/iPhone 14 & 15 Pro Max - 5.png", caption: "Selection de date" },
            { src: "img/iPhone 14 & 15 Pro Max - 6.png", caption: "Confirmation RDV" },
            { src: "img/iPhone 14 & 15 Pro Max - 7.png", caption: "Confirmation de réservation" },
            { src: "img/iPhone 14 & 15 Pro Max - 8.png", caption: "Profil patient" }
        ]
    },
    {
        title: "Atelier du Carreau",
        tag: "Site Web E-commerce",
        description: "Design d'un site e-commerce dedie au zellige marocain, integrant une fonctionnalite interactive de personnalisation offrant aux utilisateurs la possibilite de configurer leur produit selon leurs preferences.",
        objective: "Creer une experience d'achat en ligne immersive pour l'artisanat marocain avec personnalisation interactive des produits (choix des couleurs, motifs, dimensions).",
        tools: ["Figma", "Adobe Illustrator", "E-commerce Design", "Personnalisation UI"],
        color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        images: [
            { src: "img/page d'accueil.png", caption: "Page d'accueil" },
            { src: "img/page historique.png", caption: "Page Histoire" },
            { src: "img/page catalogue.png", caption: "Catalogue produits" },
            { src: "img/page produit detail.png", caption: "Page produit detail" },
            { src: "img/page personnalisation.png", caption: "Personnalisation" }
        ]
    },
    {
        title: "AjiApp - Guide Touristique",
        tag: "Guide Touristique",
        description: "Redesign du logo et conception UI/UX complete d'une application touristique existante permettant l'achat de cartes SIM, la reservation d'hotels et restaurants, la location de voitures et l'achat de billets pour la Coupe du Monde.",
        objective: "Moderniser l'identite visuelle et l'experience utilisateur d'une application touristique marocaine multiservices.",
        tools: ["Figma", "Adobe Illustrator", "Branding", "Logo Design", "UX/UI"],
        color: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
        images: [
            { src: "img/section accueil.png", caption: "Page d'accueil" },
            { src: "img/section carte sim md2.png", caption: "Cartes SIM" },
            { src: "img/destination.png", caption: "Page Destination" },
            { src: "img/section d'hotels.png", caption: "Page d'hotel" },
            { src: "img/section de retaurant.png", caption: "Page restaurant" },
            { src: "img/page transport.png", caption: "Pages transport" },
            { src: "img/Group 5.png", caption: "Page site historique" },
            { src: "img/Group 6.png", caption: "Page location voiture" }
        ]
        
    },
    {
        title: "Redesign Spotify",
        tag: "Redesign Mobile",
        description: "Analyse approfondie de l'application leader du marche du streaming musical et proposition d'ameliorations centrees utilisateur tout en respectant l'identite de la marque.",
        objective: "Identifier les points de friction UX et proposer des solutions innovantes pour ameliorer l'experience d'ecoute musicale.",
        tools: ["Figma", "UX Analysis", "Heuristic Evaluation", "Mobile Design"],
        color: "linear-gradient(135deg, #1db954 0%, #1ed760 100%)",
        images: [
            { src: "img/ecran connexion.png", caption: "Ecran de bienvenue" },
            { src: "img/ecran login.png", caption: "Connexion" },
            { src: "img/ecran accueil.png", caption: "Accueil" },
            { src: "img/Body1.png", caption: "Lecture en cours" },
            { src: "img/Body2.png", caption: "Lecture en cours" },
            { src: "img/ecran partage.png", caption: "Partage" },
            { src: "img/page recherche.png", caption: "Bibliotheque" },
            { src: "img/page recherche2.png", caption: "Recherche" },
            { src: "img/ecran bibioteque.png", caption: "Recherche" }
        ]
    },
    {
        title: "Redesign Airbnb",
        tag: "Redesign Web",
        description: "Analyse d'une plateforme internationale complexe et proposition d'ameliorations centrees utilisateur tout en conservant l'identite visuelle distinctive de la marque.",
        objective: "Simplifier le parcours de reservation et ameliorer la decouverte des logements sur une plateforme internationale de location.",
        tools: ["Figma", "UX Analysis", "Web Design", "Information Architecture"],
        color: "linear-gradient(135deg, #ff5a5f 0%, #fc642d 100%)",
        images: [
            { src: "img/accueill.png", caption: "Page d'accueil" },
            { src: "img/logement.png", caption: "Recherche de logements" },
            { src: "img/logement (1).png", caption: "Detail logement" },
            { src: "img/page demande reservation.png", caption: "Demande de reservation" }
        ]
    }
];

// ====== MODAL VARIABLES ======
let currentProjectImages = [];
let currentLightboxIndex = 0;

// ====== HELPER: Check if image exists ======
function imageExists(url, callback) {
    const img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

// ====== PROJECT MODAL FUNCTIONS ======
function openProjectModal(index) {
    const project = projects[index];
    const modal = document.getElementById('projectModal');

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalTag').textContent = project.tag;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalObjective').textContent = project.objective;

    // Tools tags
    const toolsContainer = document.getElementById('modalTools');
    toolsContainer.innerHTML = project.tools.map(tool => 
        `<span class="modal-tool-tag">${tool}</span>`
    ).join('');

    // Tools list
    const toolsList = document.getElementById('modalToolsList');
    toolsList.innerHTML = project.tools.map(tool => `<li>${tool}</li>`).join('');

    // Gallery - NOW WITH REAL IMAGES!
    const gallery = document.getElementById('modalGallery');
    currentProjectImages = project.images;

    gallery.innerHTML = project.images.map((img, i) => `
        <div class="gallery-item" onclick="openLightbox(${i})">
            <img src="${img.src}" 
                 alt="${img.caption}" 
                 onerror="this.parentElement.innerHTML='<div class=\'gallery-item-placeholder\'><i class=\'fas fa-image\'></i><span>${img.caption}</span><small>Image non trouvee: ${img.src}</small></div><div class=\'gallery-item-caption\'>${img.caption}</div>'"
                 loading="lazy">
            <div class="gallery-item-caption">${img.caption}</div>
        </div>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeProjectModal();
    }
});

// ====== LIGHTBOX FUNCTIONS ======
function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImage');

    // Use the real image source
    img.src = currentProjectImages[index].src;
    img.alt = currentProjectImages[index].caption;

    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function changeLightboxImage(direction) {
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentProjectImages.length - 1;
    } else if (currentLightboxIndex >= currentProjectImages.length) {
        currentLightboxIndex = 0;
    }

    const img = document.getElementById('lightboxImage');
    img.src = currentProjectImages[currentLightboxIndex].src;
    img.alt = currentProjectImages[currentLightboxIndex].caption;
}

// Lightbox keyboard navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeLightboxImage(-1);
    if (e.key === 'ArrowRight') changeLightboxImage(1);
});

// ====== MOBILE MENU ======
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ====== NAVBAR SCROLL EFFECT ======
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 26, 0.95)';
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 26, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ====== SCROLL REVEAL ANIMATION ======
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ====== FILTER PROJECTS ======
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');

            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====== KEYBOARD SHORTCUTS ======
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeLightbox();
    }
});
