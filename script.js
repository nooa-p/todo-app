const btn = document.querySelector('.mode-toggle');
const header = document.querySelector('header');
const prefer = window.matchMedia('(prefers-color-scheme: dark)');
var list = document.querySelector('.list');
const states = document.getElementById('states');

// dark & light theme saved to local storage
const current = localStorage.getItem('theme');
if (current === 'dark') {
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
} else if (current === 'light') {
    document.body.classList.toggle('light');
    header.classList.toggle('light');
};

// dark & light theme toggle
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

// checking and unchecking todos
list.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('checked');
    }
}, false);

// deleting a todo
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var parent = this.parentElement;
        parent.remove();
    }
};

// adding a new todo
document.getElementById('new-item').addEventListener('submit', function() {
    var li = document.createElement('li');
    var span = document.createElement('span');
    var input = document.getElementById('new-text').value;
    var cross = document.createElement('div');
    cross.className = 'close';

    var t = document.createTextNode(input);
    span.appendChild(t);
    li.appendChild(span);
    li.appendChild(cross);
    if (input != '') {
        list.appendChild(li);
    }
    document.getElementById('new-text').value = '';

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var parent = this.parentElement;
            parent.remove();
        }
    }
});

// switching between different views
states.addEventListener('change', (evt) => {
    let trg = evt.target;
    let trg_div = trg.parentNode;
    if (trg.type === 'radio' && trg_div && trg_div.tagName === 'DIV') {
        let prior = states.querySelector('div.checked input[name="state"');
        if (prior) {
            prior.parentNode.classList.toggle('checked');
        }
        trg_div.classList.toggle('checked');
        if (trg.id === 'active') {
            for (const child of list.children) {
                if (child.classList.contains('checked')) {
                    child.classList.add('hide');
                }
            }
        } else if (trg.id === 'complete') {

        } else {

        };
    }
}, false);