class MessageMe {
  _messageMe = document.querySelector('.contact-me-modal');
  _modal = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _btnClose = document.querySelector('.close-modal');

  constructor() {
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  toggleWindow() {
    this._modal.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._messageMe.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
}
export default new MessageMe();
