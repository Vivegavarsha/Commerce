document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.querySelector('.email-form input');
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        alert('Thank you for subscribing with ' + email);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
