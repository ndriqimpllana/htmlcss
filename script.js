// Simple form submission (replace with your actual server-side logic)
const form = document.querySelector('#info-page form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your message! I will get back to you soon.');
});
