export class Accordion {
  constructor() {
    this.content = document.querySelectorAll('.faq__content');
    this.checkboxClass = 'faq__checkbox';
    this.textClass = 'faq__text';
    this.textClassActive = `${this.textClass}--active`;
  }

  init() {
    this.content.forEach((elem) => {
      const checkbox = elem.querySelector(`.${this.checkboxClass}`);
      const text = elem.querySelector(`.${this.textClass}`);
      this.event(elem, checkbox, text);
    });
  }

  event(elem, checkbox, text) {
    elem.addEventListener('change', ()=> {
      if (checkbox.checked) {
        text.classList.add(`${this.textClassActive}`);
      } else {
        text.classList.remove(`${this.textClassActive}`);
      }
    });
  }
}
