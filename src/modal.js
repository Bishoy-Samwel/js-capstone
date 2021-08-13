export default class Modal {
  displayed = null;

  // To control the window
  pop = (box) => {
    console.log('hi');
    if (this.displayed === null) {
      box.style.display = 'block';
      this.displayed = true;
    } else {
      box.style.display = 'none';
      this.displayed = null;
    }
  }

  generateBox = (content, closeTxt = 'close') => {
    this.boxDiv = document.createElement('div');
    this.boxDiv.setAttribute('id', 'box');
    this.boxDiv.append(...content);
    this.closeBtn = document.createElement('btn');
    this.closeBtn.setAttribute('class', 'close-btn');
    this.closeBtn.textContent = closeTxt;
    this.boxDiv.append(this.closeBtn);
    this.closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.pop(this.boxDiv);
    });
  }

  create = (content) => {
    this.generateBox(content);
  }
}