export class Tab {
  constructor(config) {
    this.btns = config.btns;
    this.tabs = config.tabs;
    this.btnActive = config.btnActive;
    this.tabActive = config.tabActive;
  }

  init() {
    this.btns.forEach((element) =>{
      this.event(element);
    });
  }

  event(element) {
    element.addEventListener('click', () => {
      let tabId = element.dataset.id;
      let currentTab = document.querySelector(`[data-tab="${tabId}"]`);

      this.hide();
      this.show(element, currentTab);
    });
  }

  show(btn, tab) {
    btn.classList.add(this.btnActive);
    tab.classList.add(this.tabActive);
  }

  hide() {
    this.tabs.forEach((tab)=> {
      tab.classList.remove(this.tabActive);
    });
    this.btns.forEach((btn)=> {
      btn.classList.remove(this.btnActive);
    });
  }
}
