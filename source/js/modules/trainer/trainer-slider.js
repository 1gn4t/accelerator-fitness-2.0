export class Trainer {
  constructor() {
    this.classItem = 'trainer__item';
    this.classActive = `${this.classItem}--active`;
    this.container = document.querySelector('.trainer__list');
  }

  event() {
    this.container.addEventListener('click', (evt)=> {
      const target = evt.target.closest(`.${this.classItem}`);
      target.classList.toggle(this.classActive);
    });
  }
}
