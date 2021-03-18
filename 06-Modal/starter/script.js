'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden'); // maknuo sam hiiden iz naziva klase
  overlay.classList.remove('hidden');
  //modal.style.display = 'block';
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  const element = btnsOpenModal[i];
  element.addEventListener('click', openModal);
}

const closeModal = function (ispis) {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // Zatvaranje na ESC samo ako je modal otovren
    closeModal();
  }
});
