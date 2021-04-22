/*
Fetches the information of the wings and returns the dynamically created HTML string
*/
function getCardHTML(wingTitle) {
    let wings = wingInformation[wingTitle];
    let wingCardInformation = `
  <div class="row" id="${wings['id']}">
    <div class="col-sm">
        <h2 class="wing-title mt-3">${wings['title']}</h2>
        <p class="mt-3">${wings['description1']}</p>
        <p class="mt-3">${wings['description2']}</p>
    </div>
    <div class="col-sm mb-5">
        <iframe width="560" height="315" src="${wings['youtubeLink']}" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
    </div>
  </div>
  `;
    return wingCardInformation;
}

function handleWingClick(elementId) {
    //Check if element information is already on page. If present and button is clicked, it is removed.
    let wings = wingInformation[elementId];
    let wingElement = document.getElementById(wings.id);
    if (wingElement === null) {
        let cardHTML = getCardHTML(elementId);
        let container = document.getElementById('wing-information-container');
        container.innerHTML += cardHTML;
    } else {
        wingElement.remove();
    }
}

// This function targets images with the .img-select class
function addImageSelector() {
    const imgSelected = document.querySelectorAll('.img-select');

    // It iterates through each image and activates it by adding a class
    imgSelected.forEach((imgSelect) => {
        imgSelect.addEventListener('click', () => {
            imgSelect.classList.toggle('activeimg');
        });
    });
}

// This code ensures that the click function is applied to all the .wing-click-event-class elements after the window has fully loaded.
window.addEventListener('load', function () {
    document.querySelectorAll('.wing-click-event-class').forEach((item) => {
        item.addEventListener('click', function (e) {
            handleWingClick(e.target.getAttribute('id'));
        });
    });

    addImageSelector();
});
