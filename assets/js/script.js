// This script ensures only once the webpage is fully loaded is the addImageSelector function applied 

window.addEventListener('load', (event) => {
  
    addImageSelector();
  
  });

// This function targets the images with property img-select

  function addImageSelector() {
    const imgSelected = document.querySelectorAll('.img-select');

// When the image is selected on click, this click event toggles the 'activeimg' class.
  
  imgSelected.forEach((imgSelect) => {
    imgSelect.addEventListener('click', () => {
      imgSelect.classList.toggle('activeimg');
    });
  });
  }
