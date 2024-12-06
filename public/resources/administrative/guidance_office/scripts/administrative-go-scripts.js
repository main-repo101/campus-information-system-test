document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('java.js');

    toggleButton.addEventListener('click', function() { 
        document.body.classList.toggle('dark-mode');
    });
});