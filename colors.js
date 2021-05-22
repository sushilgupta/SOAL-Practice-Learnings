//This file is linked with colors.html
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            document.querySelector('#change').style.color = button.dataset.color;
        }
    });
});