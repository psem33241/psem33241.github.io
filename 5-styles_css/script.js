function setLanguage(language) {
    const languagePaths = {
        fr: "../2-fr/2-index-fr.html",
        en: "../3-eng/2-index-en.html",
    };
    
    // Vérification de la disponibilité de la langue
    if (!languagePaths[language]) {
        console.error(`Langue non prise en charge : ${language}`);
        alert("La langue sélectionnée n'est pas disponible.");
        return;
    }
    
    // Détection des appareils mobiles pour ajuster les redirections
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Animation de transition
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = languagePaths[language];
    }, isMobile ? 0 : 300); // Pas d'animation sur mobile pour une meilleure réactivité
}

// Ajout d'un listener pour le redimensionnement
window.addEventListener('resize', debounce(() => {
    adjustLayoutForScreenSize();
}, 250));

// Fonction pour optimiser les performances lors du redimensionnement
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Ajustements spécifiques selon la taille d'écran
function adjustLayoutForScreenSize() {
    const width = window.innerWidth;
    const elements = document.querySelectorAll('.card, .section');
    
    elements.forEach(el => {
        if (width <= 480) {
            el.style.padding = '10px';
        } else if (width <= 768) {
            el.style.padding = '15px';
        } else {
            el.style.padding = '20px';
        }
    });
}