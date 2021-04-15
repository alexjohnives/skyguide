let wingInformation = {
  wingImage0: {
    id: 'ilseWl1',
    title: 'Ilse WL 1',
    description1: 'The Child of Light is in the first cave to the left.',
    description2:
      'You need to have found at least one Ancestor Spirit in Daylight Prairie to enter the cave.',
    youtubeLink: 'https://www.youtube.com/embed/_n7BPwsAshE',
  },
  wingImage1: {
    id: 'ilseWl2',
    title: 'Ilse WL 2',
    description1:
      'Go to the right of the cave entrance where you receive Winged Light 1, and climb above the mouth of the cave.',
    description2:
      'Walk across the top of the hill to find the Child of Light at the other end (Its less walking if you get WL 4 before 3)',
    youtubeLink: 'https://www.youtube.com/embed/33lNvxzuWj8',
  },
  wingImage2: {
    id: 'ilseWl3',
    title: 'Ilse WL 3',
    description1:
      'Go straight ahead to the ramp further away in front of the temple. The Child of Light is at the top of the ramp.',
    description2:
      'You will need to have found at least one Ancestor Spirit to enter the ramp or be able to fly to the top of it.',
    youtubeLink: 'https://www.youtube.com/embed/lujlEcccQIk',
  },
  wingImage3: {
    id: 'ilseWl4',
    title: 'Ilse WL 4',
    description1:
      'Go to the very right of the area, behind the ramp to the right. There is a cave with the next Child of Light.',
    description2:
      'You will need to have found at least one Ancestor Spirit to enter the cave.',
    youtubeLink: 'https://www.youtube.com/embed/aIiJ-iYxTzc',
  },
  wingImage4: {
    id: 'ilseWl5',
    title: 'Ilse WL 5',
    description1:
      'ROUTE 1: Two person puzzle: When complete release the butterflies and fly up to where your wing awaits!',
    description2:
      'ROUTE 2: Flying solo: Fly up to the upper level using the clouds to keep you charged. Once up reach the Child of Light through the tunnel.',
    youtubeLink: 'https://www.youtube.com/embed/yXrNvBOmHM8',
  },
};

/*
Fetches the information of the wings and returns the dynamically created HTML string
*/
function getCardHTML(wingTitle) {
  let wings = wingInformation[wingTitle];
  let wingCardInformation = `
  <div class="row" id="${wings['id']}">
    <div class="col-sm">
        <h2 class="intro mt-3">${wings['title']}</h2>
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

// Clock Javascript

// function getTimeRemaining(endtime) {
//   const total = Date.parse(endtime) - Date.parse(new Date());
//   const seconds = Math.floor((total / 1000) % 60);
//   const minutes = Math.floor((total / 1000 / 60) % 60);
//   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));

//   return {
//     total,
//     days,
//     hours,
//     minutes,
//     seconds,
//   };
// }

// function initializeClock(id, endtime) {
//   const clock = document.getElementById(id);
//   const daysSpan = clock.querySelector('.days');
//   const hoursSpan = clock.querySelector('.hours');
//   const minutesSpan = clock.querySelector('.minutes');
//   const secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   const timeinterval = setInterval(updateClock, 1000);
// }

// const deadline = 'April 18 2021 23:59:59 UTC -0700';
// new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);
