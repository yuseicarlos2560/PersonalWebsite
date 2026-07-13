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

    // Handle typewriter visibility based on language
    const slot = document.getElementById('typewriter-slot');
    if (slot) {
        if (lang === 'en') {
            slot.style.display = 'block';
            if (!isTypewriterRunning) {
                isTypewriterRunning = true;
                typeWriter();
            }
        } else {
            slot.style.display = 'none';
            stopTypewriter();
        }
    }

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

// Typewriter rotating text effect
const rotatingTitles = [
    "Product Manager",
    "Data Scientist",
    "Software Engineer",
    "BNU Graduate Student"
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
let typewriterTimer = null;
let isTypewriterRunning = false;

function startTypewriter() {
    const slot = document.getElementById('typewriter-slot');
    if (!slot) return;
    
    // Only show in English
    if (currentLang !== 'en') {
        slot.style.display = 'none';
        return;
    }
    
    slot.style.display = 'block';
    isTypewriterRunning = true;
    typeWriter();
}

function stopTypewriter() {
    isTypewriterRunning = false;
    if (typewriterTimer) {
        clearTimeout(typewriterTimer);
        typewriterTimer = null;
    }
}

function typeWriter() {
    if (!isTypewriterRunning || currentLang !== 'en') return;
    
    const textEl = document.querySelector('.typewriter-text');
    if (!textEl) return;
    
    const currentTitle = rotatingTitles[titleIndex];
    
    const displayText = isDeleting
        ? currentTitle.substring(0, charIndex - 1)
        : currentTitle.substring(0, charIndex + 1);
    
    textEl.textContent = displayText;
    
    const cursorEl = document.querySelector('.typewriter-slot .cursor');
    if (cursorEl) {
        cursorEl.style.display = (!isDeleting && charIndex < currentTitle.length) ? 'inline' : 'none';
    }
    
    if (!isDeleting) {
        charIndex++;
        typeSpeed = 100;
        if (charIndex === currentTitle.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at full word
        }
    } else {
        charIndex--;
        typeSpeed = 50;
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % rotatingTitles.length;
            typeSpeed = 500; // Pause before typing next
        }
    }
    
    typewriterTimer = setTimeout(typeWriter, typeSpeed);
}

// Start typewriter after initial load
setTimeout(startTypewriter, 1500);

// Parallax effect on hero images
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroSection = document.querySelector('.home');
    if (!heroSection) return;
    
    const heroHeight = heroSection.offsetHeight;
    if (scrolled > heroHeight) return;
    
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(el => {
        const speed = parseInt(el.getAttribute('data-parallax')) * 0.03;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

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
