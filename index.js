const day = document.querySelector('span[data-value="days"]');
const hour = document.querySelector('span[data-value="hours"]');
const min = document.querySelector('span[data-value="mins"]');
const sec = document.querySelector('span[data-value="secs"]');

let timeId = null;

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
}

pad(value) {
  return String(value).padStart(2, '0');
}

getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    day.textContent = days;

  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    hour.textContent = hours;

  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    min.textContent = mins;

  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    sec.textContent = secs;
}

getTime() {
  const currentTime = Date.now();
  const time = this.targetDate - currentTime;
  return time;
};

timeSharing() {
  this.getTimeComponents(this.getTime());
}

timerStart() {
  this.timeSharing();
  this.timeId = setInterval(() => { this.timeSharing(); }, 1000)
};

};

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 19, 2020'),
});

document.addEventListener("DOMContentLoaded", timer1.timerStart());