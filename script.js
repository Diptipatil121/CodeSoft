document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Mock sending data to a server
  setTimeout(function() {
      document.getElementById('responseMessage').textContent = 'Thank you for contacting us, ' + name + '. We will get back to you shortly.';
      document.getElementById('contactForm').reset();
  }, 500);
});
