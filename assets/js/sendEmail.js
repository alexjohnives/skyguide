// Email JS

// Button, serviceID and templateID linked to Email JS functionality
const btn = document.getElementById('button');
const serviceID = 'default_service';
const templateID = 'skyguide contact';

//When the page content is fully loaded the form is activated.
window.addEventListener('load', function () {
    document
        .getElementById('form')
        //On submit, the default button behaviour is changed from sent to sending. 
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';
            emailjs.sendForm(serviceID, templateID, this).then(
                //When the form is sent successfully an alert is displayed.
                () => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                    // When the email alert Sent is displayed, the code below clears the form fields
                    document.getElementById('from_name').value = '';
                    document.getElementById('user_email').value = '';
                    document.getElementById('message').value = '';
                },
                // Once the form is sent the button text reverts to 'Send Email'
                (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                }
            );
        });
});
