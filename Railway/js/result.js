// Some weird issues on mobile & safari - damn .. any ideas?

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', e => {
        button.classList.add('processing');
        e.preventDefault();
    });
});

document.querySelector('.restart').addEventListener('click', e => {
    document.querySelectorAll('.button').forEach(button => {
        button.classList.remove('processing');
    });
    e.preventDefault();
});