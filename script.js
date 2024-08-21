document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.querySelector('.main-content');
    const skillBars = document.querySelectorAll('.skill-bar .progress');
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.getElementById('project-modal');
    const closeButton = modal.querySelector('.close-button');
    const modalTitle = modal.querySelector('#project-title');
    const modalDescription = modal.querySelector('#project-description');
    const modalImage = modal.querySelector('#project-image');

    enterButton.addEventListener('click', () => {
        document.querySelector('.intro-section').style.display = 'none';
        mainContent.style.display = 'block';

        // Déclencher l'animation de fondu
        setTimeout(() => {
            mainContent.style.opacity = '1';
            // Remplissage des barres de compétences
            skillBars.forEach(bar => {
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage;
            });
        }, 100);
    });

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            const image = item.getAttribute('data-image');

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalImage.src = image;

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
