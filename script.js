

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});







// მეილი ჰომზე 

document.getElementById('subscribe-btn').addEventListener('click', function (event) {
  const emailField = document.getElementById('email');
  const emailValue = emailField.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue || !emailRegex.test(emailValue)) {
    event.preventDefault(); 
    alert("⚠️ Please enter a valid email address!"); 
    emailField.classList.add('error'); 
  } else {
    emailField.classList.remove('error'); 
    alert("Thank you for subscribing! ❤️");
  }
});

