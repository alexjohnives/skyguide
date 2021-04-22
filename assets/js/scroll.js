// Scroll to top button

//Code modified from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button:
scrollbutton = document.getElementById('scroll');

// When the user scrolls down 20px from the top of the document, the button is displayed
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollbutton.style.display = 'block';
    } else {
        scrollbutton.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
