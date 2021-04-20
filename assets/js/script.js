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
    <div class="col-sm">
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
    //Introduced check if element information is already on page. If present and button is clicked, it is removed.
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

function addImageSelector() {
    const imgSelected = document.querySelectorAll('.img-select');

    // go through each image and activate it by adding a class
    imgSelected.forEach((imgSelect) => {
        imgSelect.addEventListener('click', () => {
            imgSelect.classList.toggle('activeimg');
        });
    });
}

window.addEventListener('load', function () {
    // document.getElementById('praireImage0').addEventListener('click', function (e) {
    //   handlePraireClick('praireImage0');
    // })

    document.querySelectorAll('.wing-click-event-class').forEach((item) => {
        item.addEventListener('click', function (e) {
            handleWingClick(e.target.getAttribute('id'));
        });
    });

    addImageSelector();
});
