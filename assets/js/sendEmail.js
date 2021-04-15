// Created contact form and followed CI Emailjs lesson for javascript 
function sendMail(contactForm) {
  emailjs
    .send('gmail', 'thatskyguide', {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      message: contactForm.message.value,
    })
    .then(
      function (response) {
        console.log('SUCCESS', response);
      },
      function (error) {
        console.log('FAILED', error);
      }
    );
  return false; // To block from loading a new page
}