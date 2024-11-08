// // Basic JavaScript to handle the contact form submission
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
  
//     if (name && email && message) {
//       alert('Thank you, ' + name + '! Your message has been sent.');
//       // Reset form
//       document.getElementById('contactForm').reset();
//     } else {
//       alert('Please fill out all fields.');
//     }
//   });

document.getElementById("contactForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We’ll get back to you soon.");
});

  