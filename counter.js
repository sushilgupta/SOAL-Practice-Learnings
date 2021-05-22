let counter = 0;

function count() {
    counter = counter + 1;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`You have counted till ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
   document.querySelector('button').onclick = count;
})