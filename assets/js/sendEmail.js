const btn = document.getElementById('button');
const serviceID = 'default_service';
const templateID = 'skyguide contact';

window.addEventListener('load', function () {
    document
        .getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';

            emailjs.sendForm(serviceID, templateID, this).then(
                () => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                },
                (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                }
            );
        });
});
