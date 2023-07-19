import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {Tab} from './modules/tab/tab';
import {TicketConfig} from './modules/tab/ticketConfig';
import {FaqConfig} from './modules/tab/faq-config';
import {Trainer} from './modules/trainer/trainer-slider';
import {Accordion} from './modules/faq/faq-accordion';
import {Video} from './modules/video/video';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  const ticket = new Tab(new TicketConfig());
  ticket.init();
  const faqTab = new Tab(new FaqConfig());
  faqTab.init();

  const trainer = new Trainer();
  trainer.event();

  const accordion = new Accordion();
  accordion.init();

  const video = new Video();
  video.init();

  const form = new Form();
  window.form = form;
  form.init();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
