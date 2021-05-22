//file linked to color.html
document.addEventListener('DOMContentLoaded', function() {
    //Change font color to red
    document.querySelector('#red').onclick = function() {
        document.querySelector('#change').style.color = 'red';
    }
    //Change font color to blue
    document.querySelector('#blue').onclick = function() {
        document.querySelector('#change').style.color = 'blue';
    }
    //Change font color to green
    document.querySelector('#green').onclick = function() {
        document.querySelector('#change').style.color = 'green';
    }
});