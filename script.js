document.getElementById('enter-button').addEventListener('click', function() {
    document.querySelector('.intro-section').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.main-content').style.opacity = '1';
        animateSkills();
    }, 10);
});

function animateSkills() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage;
    });
}
