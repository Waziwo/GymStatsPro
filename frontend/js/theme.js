document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme === 'dark');
        
        // Dodanie efektu przejścia
        document.body.classList.add('transition');
        setTimeout(() => {
            document.body.classList.remove('transition');
        }, 300);
    }

    function updateIcon(isDark) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    function checkSystemTheme() {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark');
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        setTheme(newTheme);
    });

    checkSystemTheme();
});