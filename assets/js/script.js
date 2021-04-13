window.addEventListener('load', (event) => {
  
    addImageSelector();
  
  });
    
  function addImageSelector() {
    const imgSelected = document.querySelectorAll('.img-select');
  
  imgSelected.forEach((imgSelect) => {
    imgSelect.addEventListener('click', () => {
      imgSelect.classList.toggle('activeimg');
    });
  });
  }
