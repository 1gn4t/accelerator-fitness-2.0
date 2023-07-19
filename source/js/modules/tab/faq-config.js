export class FaqConfig {
  constructor() {
    this.btns = document.querySelectorAll('.faq__btn');
    this.tabs = document.querySelectorAll('.faq__list');
    this.tab = 'faq__list';
    this.btnActive = 'faq__btn--active';
    this.tabActive = 'faq__list--active';
  }
}
