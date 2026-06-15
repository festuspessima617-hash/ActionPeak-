const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const shareLocationBtn = document.getElementById('shareLocationBtn');
const counters = document.querySelectorAll('.stats-counter');
const revealItems = document.querySelectorAll('[data-reveal]');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const faqItems = document.querySelectorAll('.faq-item');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const progressFills = document.querySelectorAll('.progress-fill');
const mapDots = document.querySelectorAll('.map-dot');
let testimonialIndex = 0;

function toggleMenu() {
    if (!menuToggle || !navLinks) return;
    const open = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function closeMenu() {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
}

function setupMobileNavDropdown() {
    if (!navLinks) return;
    const links = Array.from(navLinks.querySelectorAll('a'));
    if (!links.length) return;
    const select = document.createElement('select');
    select.className = 'nav-dropdown';
    select.setAttribute('aria-label', 'Select a page');
    const placeholder = document.createElement('option');
    placeholder.textContent = 'Navigate to…';
    placeholder.value = '';
    placeholder.selected = true;
    placeholder.disabled = true;
    select.appendChild(placeholder);
    links.forEach((link) => {
        const option = document.createElement('option');
        option.value = link.href;
        option.textContent = link.textContent.trim();
        if (link.getAttribute('aria-current') === 'page') option.selected = true;
        select.appendChild(option);
    });
    select.addEventListener('change', () => {
        if (select.value) window.location.href = select.value;
    });
    navLinks.parentElement?.insertBefore(select, navLinks.nextSibling);
}

function setupForm(formId, messageId, successText) {
    const form = document.getElementById(formId);
    const message = document.getElementById(messageId);
    if (!form || !message) return;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        message.textContent = successText;
        message.style.color = '#0f5132';
        message.classList.add('visible');
        form.reset();
        setTimeout(() => message.classList.remove('visible'), 4000);
    });
}

function animateCounter(counter) {
    const target = Number(counter.dataset.target || 0);
    let current = 0;
    const step = Math.max(1, Math.round(target / 120));
    const interval = setInterval(() => {
        current = Math.min(current + step, target);
        counter.textContent = current.toLocaleString();
        if (current >= target) clearInterval(interval);
    }, 15);
}

function revealOnScroll() {
    if (!window.IntersectionObserver) {
        revealItems.forEach((item) => item.classList.add('visible'));
        counters.forEach((counter) => animateCounter(counter));
        progressFills.forEach((fill) => fillProgress(fill));
        return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            if (entry.target.querySelectorAll) {
                const stats = entry.target.querySelectorAll('.stats-counter');
                stats.forEach((counter) => animateCounter(counter));
                const fills = entry.target.querySelectorAll('.progress-fill');
                fills.forEach((fill) => fillProgress(fill));
            }
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.18 });
    revealItems.forEach((item) => observer.observe(item));
}

function initTestimonials() {
    if (!testimonialCards.length) return;
    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.style.display = i === index ? 'grid' : 'none';
        });
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    showTestimonial(testimonialIndex);
    testimonialDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            testimonialIndex = i;
            showTestimonial(testimonialIndex);
        });
    });
    setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
        showTestimonial(testimonialIndex);
    }, 6000);
}

function initFaq() {
    faqItems.forEach((item) => {
        item.addEventListener('toggle', () => {
            item.classList.toggle('open', item.open);
        });
    });
}

function initLocationShare() {
    if (!shareLocationBtn) return;
    shareLocationBtn.addEventListener('click', () => {
        if (!navigator.geolocation) {
            alert('Location sharing is not supported in this browser.');
            return;
        }
        shareLocationBtn.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const mapUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
                window.open(mapUrl, '_blank');
                shareLocationBtn.textContent = 'Share Location';
            },
            () => {
                alert('Unable to access location. Please allow location permissions and try again.');
                shareLocationBtn.textContent = 'Share Location';
            },
            { enableHighAccuracy: true, timeout: 15000 }
        );
    });
}

function fillProgress(fill) {
    const target = Number(fill.dataset.target || 0);
    requestAnimationFrame(() => {
        fill.style.width = `${target}%`;
    });
}

function renderSearchResults(results) {
    if (!searchResults) return;
    if (!results.length) {
        searchResults.innerHTML = `<div class="search-result-item"><strong>No results found</strong><p>Try searching for "report", "event", or "support".</p></div>`;
        return;
    }
    searchResults.innerHTML = results
        .map((item) => `<div class="search-result-item"><strong>${item.title}</strong><p>${item.description}</p></div>`)
        .join('');
}

const searchData = [
    { title: 'How to report safely', description: 'Step-by-step guidance for reporting incidents confidentially.' },
    { title: 'Upcoming awareness sessions', description: 'Find dates and locations for our next community workshops.' },
    { title: 'Support resources', description: 'Learn about counseling, legal aid, and medical referrals available to survivors.' },
];

function initSearch() {
    if (!searchInput || !searchBtn || !searchResults) return;
    const querySearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        const results = query
            ? searchData.filter((item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query))
            : searchData;
        renderSearchResults(results);
    };
    searchBtn.addEventListener('click', querySearch);
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            querySearch();
        }
    });
}

function animateMapDots() {
    mapDots.forEach((dot, index) => {
        dot.style.animationDelay = `${index * 0.18}s`;
    });
}

function initBackToTop() {
    if (!backToTop) return;
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 380);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initTheme() {
    const savedTheme = localStorage.getItem('actionpeak-theme');
    const preferredTheme = savedTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = preferredTheme;
    if (themeToggle) {
        themeToggle.textContent = preferredTheme === 'dark' ? '☀️' : '🌙';
        themeToggle.disabled = false;
        themeToggle.setAttribute('aria-disabled', 'false');
        themeToggle.title = 'Toggle color theme';
    }
}

function toggleTheme() {
    const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('actionpeak-theme', next);
    if (themeToggle) themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

if (navLinks) {
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

setupForm('reportForm', 'successMessage', 'Report submitted successfully. Thank you.');
setupForm('contactForm', 'contactMessage', 'Message sent successfully. We will be in touch soon.');
revealOnScroll();
initTestimonials();
initFaq();
initBackToTop();
initSearch();
animateMapDots();
initLocationShare();
initTheme();
setupMobileNavDropdown();