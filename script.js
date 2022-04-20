const icon = document.querySelector('.icon');
const closeIcon = document.querySelector('.x-icon');
const container = document.querySelector('.mobile-header-nav-links');

//  Modal popup
// const pop = document.querySelector('.popup');
// const buttonModal = document.querySelectorAll('.button');
// const cancelModal = document.querySelector('.cancel');

//  Modal popup
// const snapShoot = [
//   {
//     id: 0,
//     name: 'Tonic',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
//     featuredText: ['html', 'css', 'javascript'],
//     featuredImage: 'images/Snapshoot-Portfolio.png',
//     technologies: ['html', 'css', 'javascript'],
//     linkToLiveVersion: 'https://ugboaja-uchechi.github.io/Portfolio/',
//     linkToSource: 'https://github.com/Ugboaja-Uchechi/Portfolio',
//   },
//   {
//     id: 1,
//     name: 'Tonic',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
//     featuredText: ['html', 'css', 'javascript'],
//     featuredImage: 'images/Snapshoot-Portfolio.png',
//     technologies: ['html', 'css', 'javascript'],
//     linkToLiveVersion: 'https://ugboaja-uchechi.github.io/Portfolio/',
//     linkToSource: 'https://github.com/Ugboaja-Uchechi/Portfolio',
//   },
//   {
//     id: 2,
//     name: 'Tonic',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
//     featuredText: ['html', 'css', 'javascript'],
//     featuredImage: 'images/Snapshoot-Portfolio.png',
//     technologies: ['html', 'css', 'javascript'],
//     linkToLiveVersion: 'https://ugboaja-uchechi.github.io/Portfolio/',
//     linkToSource: 'https://github.com/Ugboaja-Uchechi/Portfolio',
//   },
//   {
//     id: 3,
//     name: 'Tonic',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
//     featuredText: ['html', 'css', 'javascript'],
//     featuredImage: 'images/Snapshoot-Portfolio.png',
//     technologies: ['html', 'css', 'javascript'],
//     linkToLiveVersion: 'https://ugboaja-uchechi.github.io/Portfolio/',
//     linkToSource: 'https://github.com/Ugboaja-Uchechi/Portfolio',
//   },

// ];
// Mobile menu
function openBar() {
  container.style.display = 'flex';
}

function close() {
  container.style.display = 'none';
}

// Modal popup
// const openModal = ({
//   description, featuredImage, technologies, linkToLiveVersion, linkToSource,
// }) => () => {
//   let displayModal = '';
//   pop.classList.add('show-popup');
//   cancelModal.style.visibility = 'hidden';
//   displayModal += `  

//   <div class="space">
//     <h3>Tonic</h3>  
//     <img src="images/x-icon.png" class="cancel" alt="x-icon">
//   </div>
//   <span>
//     FACEBOOK
//     <img src="images/Counter.png" alt="circle"> Back End Dev
//     <img src="images/Counter.png" alt="circle"> 2015
//   </span>
//   <img src="${featuredImage}" alt="Snapshoot" class="project-card-image">
//   <p>${description}</p>    
//   <ul class="type d-flex">
//     <li>${technologies[0]}</li>
//     <li>${technologies[1]}</li>
//     <li>${technologies[2]}</li>
//   </ul>
//   <div class="line"></div>
//   <a href="${linkToLiveVersion}" class="popup-button-live">See Live <img src="images/popup-icon.png" alt="popup-icon"></a>
//   <a href="${linkToSource}" class="popup-button">See Source <img src="images/purple-github.png" alt="popup-icon"></a>
 
//   `;
//   displayModal();
//   // buttonModal.forEach((button, index) => {
//   //   button.addEventListener('click', openModal(snapShoot[index]));
//   // });
// };

// Mobile menu
icon.addEventListener('click', openBar);
closeIcon.addEventListener('click', close);

// Modal popup
// buttonModal.forEach((button, index) => {
//   button.addEventListener('click', openModal(snapShoot[index]));
// });

// function closeModal() {
//   pop.classList.remove('show-popup');
//   cancelModal.style.visibility = 'hidden';
// }
// if (cancelModal !== null) {
//   cancelModal.addEventListener('click', closeModal);
// }

//  FORM VALIDATION
const formContainer = document.querySelector('.form-tag');
const mailInput = document.getElementById('email');
const messageError = document.querySelector('.error-text');

formContainer.addEventListener('submit', (e) => {
  if (mailInput.value === mailInput.value.toLowerCase()) {
    messageError.textContent = '';
  } else {
    e.preventDefault();
    messageError.innerHTML = '*email must be in lower case <br> * form not sent';
  }
});
