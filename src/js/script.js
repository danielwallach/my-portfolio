function setLanguage(lang) {
    const elements = document.querySelectorAll('.translate');
    
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.innerHTML = text; // Usar innerHTML para preservar a estrutura HTML
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setLanguage('en');
});
