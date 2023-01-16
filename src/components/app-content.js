class AppContent extends HTMLElement {
  constructor() {
    super();
    this._render();
  }

  _render() {
    this.setAttribute('class', 'app-content');
    this.innerHTML = `
      <picture class="app-content__hero">
        <source media="(min-width: 1024px)" srcset="./images/image-hero-desktop.png">
        <img src="./images/image-hero-mobile.png" alt="">
      </picture>
      <div class="app-content__description">
        <h2 class="app-content__title">Make remote work</h2>
        <p class="app-content__text">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button type="button" class="app-content__learn-more">
          Learn more
        </button>
        <div class="app-content__sponsor">
          <img src="./images/client-databiz.svg" alt="">
          <img src="./images/client-audiophile.svg" alt="">
          <img src="./images/client-meet.svg" alt="">
          <img src="./images/client-maker.svg" alt="">
        </div>
      </div>
    `;
  }
}

customElements.define('app-content', AppContent);
