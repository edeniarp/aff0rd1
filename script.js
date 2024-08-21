document.addEventListener('DOMContentLoaded', function() {
    // Bouton ENTER et écran d'introduction
    const enterButton = document.getElementById('enter-btn');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const projectPage = document.getElementById('project-page');
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');
    const backButton = document.getElementById('back-btn');

    const projects = {
        project1: {
            image: 'image1.jpg', // Remplace par le lien vers l'image du projet 1
            description: 'Description détaillée du Projet 1.'
        },
        project2: {
            image: 'image2.jpg', // Remplace par le lien vers l'image du projet 2
            description: 'Description détaillée du Projet 2.'
        }
        // Ajoute plus de projets ici
    };

    // Transition vers la page principale au clic sur le bouton ENTER
    enterButton.addEventListener('click', function() {
        introScreen.style.transition = 'opacity 1s ease-in-out';
        introScreen.style.opacity = '0';
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
        }, 1000);
    });

    // Sections et liens de navigation
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Fonction pour gérer le surlignage du lien de navigation en fonction de la section visible
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Animation des cartes de projet au survol
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateY(15deg)';
            card.style.boxShadow = '0 15px 30px rgba(0, 255, 255, 0.5)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
    });

    // Animation de défilement fluide pour la navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Effet d'apparition des sections au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animation de texte de bienvenue
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(50px)';
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1.5s, transform 1.5s';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 500);

    // Gérer le clic sur les cartes de projet
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];

            // Appliquer l'effet de zoom et masquer la carte
            card.classList.add('zoom-out');
            setTimeout(() => {
                mainContent.style.display = 'none';
                projectImage.src = project.image;
                projectDescription.textContent = project.description;
                projectPage.style.display = 'block';
            }, 600);
        });
    });

    // Gérer le retour à la page principale
    backButton.addEventListener('click', function() {
        projectPage.classList.add('fade-out');
        setTimeout(() => {
            projectPage.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.classList.add('fade-in');
            projectPage.classList.remove('fade-out');
        }, 1000);
    });
});
