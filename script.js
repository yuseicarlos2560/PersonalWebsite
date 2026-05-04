let translations = {};
let currentLang = localStorage.getItem('pref-lang') || 'en';

// Initialization
async function init() {
    try {
        const response = await fetch('translations.json');
        translations = await response.json();

        const checkbox = document.getElementById('lang-toggle-checkbox');
        checkbox.checked = currentLang === 'zh';

        applyLanguage(currentLang);

        checkbox.addEventListener('change', (e) => {
            const newLang = e.target.checked ? 'zh' : 'en';
            applyLanguage(newLang);
        });
    } catch (error) {
        console.error("Error loading translations:", error);
    }
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pref-lang', lang);

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update labels
    document.querySelector('.en-label').classList.toggle('active', lang === 'en');
    document.querySelector('.zh-label').classList.toggle('active', lang === 'zh');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navigation-bar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

init();

function toggleNotes() {
    const modal = document.getElementById("notesModal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Resume scrolling
    } else {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }
}

// Close modal if user clicks outside of the content
window.onclick = function(event) {
    const modal = document.getElementById("notesModal");
    if (event.target == modal) {
        toggleNotes();
    }
}
