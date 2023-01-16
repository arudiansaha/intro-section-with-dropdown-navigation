class SideBar extends HTMLElement {
  constructor() {
    super();
    this._render();
  }

  _render() {
    this.setAttribute('class', 'side-bar');
    this.innerHTML = `
      <button type="button" id="closeButton" class="side-bar__close">
        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
          <g fill="#151515" fill-rule="evenodd">
            <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
            <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
          </g>
        </svg>
      </button>
      <navigation-bar></navigation-bar>
      <user-button></user-button>
    `;
    this.querySelector('#closeButton').addEventListener('click', () => {
      document.querySelector('side-bar').classList.remove('active');
    })
  }
}

customElements.define('side-bar', SideBar);
