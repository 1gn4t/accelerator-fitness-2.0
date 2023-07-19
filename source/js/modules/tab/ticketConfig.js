export class TicketConfig {
  constructor() {
    this.btns = document.querySelectorAll('.tab__btn');
    this.tabs = document.querySelectorAll('.tab__content');
    this.tab = 'tab__content';
    this.btnActive = 'tab__btn--active';
    this.tabActive = 'tab__content--active';
  }
}
