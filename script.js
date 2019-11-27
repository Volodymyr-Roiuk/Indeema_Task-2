const createModalWindow = (content) => {
  const modalWindow = document.createElement('div');
  const modalContent = document.createElement('div');
  const textContent = document.createElement('p');
  const btnClose = document.createElement('button');

  modalWindow.className = 'modalWindow';
  modalContent.className = 'modalContent';
  textContent.className = 'modalContent__text';
  btnClose.id = 'closeModal';

  textContent.textContent = content;
  btnClose.textContent = 'Close modal window';

  modalContent.append(textContent, btnClose);
  modalWindow.appendChild(modalContent);

  btnClose.addEventListener('click', (event) => modalWindow.parentNode.removeChild(modalWindow));

  return modalWindow;
};

const modalWindow = createModalWindow('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut blanditiis consequuntur debitis et illo, necessitatibus placeat praesentium! Hic, veniam!');
const btnOpenModal = document.querySelector('#openModal');

btnOpenModal.addEventListener('click', (event) => document.body.appendChild(modalWindow));
