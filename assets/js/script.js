let wingInformation = {
  'wingImage0': {
    'title': 'Ilse WL 1',
    'description1': 'The Child of Light is in the first cave to the left.',
    'description2': 'You need to have found at least one Ancestor Spirit in Daylight Prairie to enter the cave.',
    'youtubeLink': 'https://www.youtube.com/embed/_n7BPwsAshE'
  },
  'wingImage1': {
    'title': 'Ilse WL 2',
    'description1': 'Go to the right of the cave entrance where you receive Winged Light 1, and climb above the mouth of the cave.',
    'description2': 'Walk across the top of the hill to find the Child of Light at the other end (It's less walking if you get WL 4 before 3).',
    'youtubeLink': 'https://www.youtube.com/embed/33lNvxzuWj8'
  },
  'wingImage2': {
    'title': 'Ilse WL 3',
    'description1': 'Go straight ahead to the ramp further away in front of the temple. The Child of Light is at the top of the ramp.',
    'description2': 'You will need to have found at least one Ancestor Spirit to enter the ramp or be able to fly to the top of it.',
    'youtubeLink': 'https://www.youtube.com/embed/lujlEcccQIk'
  },
  'wingImage3': {
    'title': 'Ilse WL 4',
    'description1': 'Go to the very right of the area, behind the ramp to the right. There is a cave with the next Child of Light.',
    'description2': 'You will need to have found at least one Ancestor Spirit to enter the cave.',
    'youtubeLink': 'https://www.youtube.com/embed/aIiJ-iYxTzc'
  },
  'wingImage4': {
    'title': 'Ilse WL 5',
    'description1': 'ROUTE 1: Two person puzzle: Use the cloud tunnel on the right side of the Temple to reach the mountain structure. There is a two-person door blocking the main entrance to the cave. Once in with a friend release the butterflies and fly up to where your wing awaits!',
    'description2': 'ROUTE 2: Flying solo: Fly up to the upper level using the clouds to keep you charged. Once up you can reach the Child of Light through the tunnel.',
    'youtubeLink': 'https://www.youtube.com/embed/yXrNvBOmHM8'
  },
}

console.log(wingInformation)
  // 'wingImage2': {
  //   'title': '',
  //   'description1': '',
  //   'description2': '',
  //   'youtubeLink': ''
  // },




// This script ensures that as the webpage is loaded the addImageSelector function is applied. 

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

  var showCard = 