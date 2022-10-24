// Page navigation
// Event delegation

class NavView {
  // 1.Add the eventlistener to a common parent element
  // 2. Determine which element originated the event
  _parentElement = document.querySelector('.nav-links');

  addHandlerNav(handler) {
    this._parentElement.addEventListener('click', handler);
  }
}
export default new NavView();
