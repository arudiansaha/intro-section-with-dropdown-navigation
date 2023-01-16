class UserButton extends HTMLElement {
  constructor() {
    super();
    this._render();
  }

  _render() {
    this.setAttribute('class', 'user-button');
    this.innerHTML = `
      <button type="button" class="user-button__login">Login</button>
      <button type="button" class="user-button__register">Register</button>
    `;
  }
}

customElements.define('user-button', UserButton);
