export class Video {
  constructor() {
    this.videoWrap = document.querySelector('.gym__video-wrap');
    this.videoWrapHide = 'gym__video-wrap--hidden';
    this.video = document.querySelector('.gym__video');
    this.playBtn = document.querySelector('.gym__video-play');
    this.widthWindow = document.documentElement.clientWidth;
  }

  init() {
    this.play();
    this.adaptivePoster();
  }

  play() {
    this.playBtn.addEventListener('click', () => {
      this.video.play();
      this.hide();
      this.addControls();
    });
  }

  hide() {
    this.videoWrap.classList.toggle(`${this.videoWrapHide}`);
    this.playBtn.style.display = 'none';
  }

  addControls() {
    this.video.setAttribute('controls', '');
  }

  adaptivePoster() {
    if (this.widthWindow < 768) {
      this.video.setAttribute('poster', './img/gym/video-gym-mobile.png');
    }
    console.log(this.widthWindow);
  }
}
