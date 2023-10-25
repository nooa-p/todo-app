const btn = document.querySelector('.btn-toggle');
const prefer = window.matchMedia('(prefers-color-scheme: dark)');

const current = localStorage.getItem('theme');
if (current === 'dark') {
    document.body.classList.toggle('dark');
} else if (current === 'light') {
    document.body.classList.toggle('light');
}

btn.addEventListener("click", function() {
    if (prefer.matches) { 
        document.body.classList.toggle('light');
        var theme = document.body.classList.contains('light')
            ? 'light'
            : 'dark';
        
    } else { 
        document.body.classList.toggle('dark');
        var theme = document.body.classList.contains('dark')
            ? 'dark'
            : 'light';
    }
    localStorage.setItem('theme', theme);
});

