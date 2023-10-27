const btn = document.querySelector('.mode-toggle');
const header = document.querySelector('header');
const prefer = window.matchMedia('(prefers-color-scheme: dark)');
var list = document.querySelector('.list');

const current = localStorage.getItem('theme');
if (current === 'dark') {
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
} else if (current === 'light') {
    document.body.classList.toggle('light');
    header.classList.toggle('light');
}

btn.addEventListener("click", function() {
    if (prefer.matches) { 
        document.body.classList.toggle('light');
        header.classList.toggle('light');
        var theme = document.body.classList.contains('light')
            ? 'light'
            : 'dark';
        
    } else { 
        document.body.classList.toggle('dark');
        header.classList.toggle('light');
        var theme = document.body.classList.contains('dark')
            ? 'dark'
            : 'light';
    }
    localStorage.setItem('theme', theme);
});

list.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('checked');
    }
}, false);

document.getElementById('new-item').addEventListener('submit', function() {
    var li = document.createElement('li');
    var span = document.createElement('span');
    var input = document.getElementById('new-text').value;
    var close = document.createElement('div');
    close.className = 'close';

    var t = document.createTextNode(input);
    span.appendChild(t);
    li.appendChild(span);
    li.appendChild(close);
    if (input != '') {
        list.appendChild(li);
    }
    document.getElementById('new-text').value = '';
});