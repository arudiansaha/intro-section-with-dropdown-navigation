window.addEventListener('click', (event) => {
  const _target = event.target;
  const featuresElement = document.querySelector('.navigation-bar__features');
  const companyElement = document.querySelector('.navigation-bar__company');

  if (!_target.matches('.navigation-bar__btn')) {
    featuresElement.classList.remove('active');
  }

  if (!_target.matches('.navigation-bar__btn')) {
    companyElement.classList.remove('active');
  }
});
