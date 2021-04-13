// This script ensures only once the webpage is fully loaded is the addImageSelector function applied 

window.addEventListener('load', (event) => {
  
    addImageSelector();
  
  });

// This function targets the images with property img-select */

  function addImageSelector() {
    const imgSelected = document.querySelectorAll('.img-select');

// When the image is selected on click, this click event toggles the 'active-img' class.
  
  imgSelected.forEach((imgSelect) => {
    imgSelect.addEventListener('click', () => {
      imgSelect.classList.toggle('activeimg');
    });
  });
  }

// This function displays the corresponding div with each image 

  function selectImage(elementId) {
    var x = document.getElementById(elementId);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  };
