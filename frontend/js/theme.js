// theme.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Funkcja do ustawienia motywu
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme === 'dark');
    }

    // Funkcja do aktualizacji ikony
    function updateIcon(isDark) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Sprawdzenie preferencji systemu
    function checkSystemTheme() {
        // Sprawdź preferencje systemowe
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark');
        
        // Sprawdź czy jest już zapisany motyw w localStorage
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            // Użyj zapisanego motywu
            setTheme(savedTheme);
        } else {
            // Użyj motywu systemowego
            setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
        }
    }

    // Nasłuchiwanie zmian w preferencjach systemowych
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemTheme);

    // Obsługa kliknięcia przycisku zmiany motywu
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        setTheme(newTheme);
    });

    // Inicjalne sprawdzenie motywu
    checkSystemTheme();
});