export class CountDownTimer {
  timer_id;
  //remainingTime;
  constructor(state) {
    this.displayTime = document.getElementById("displayTime");
    if (state === "short") {
      this.duration = 5; //to be changed to 300 in final release
    } else if (state === "long") {
      this.duration = 7; //to be changed to 900 in final release
    } else {
      this.duration = 10; //to be changed to 15000 in final release
    }
    this.state = state;
    this.remainingTime = this.duration;
    this.startButton = document.getElementById("start");
    document.getElementById("progress-bar").style.width = "0%"; //reset progress bar
  }

  start() {
    this.startButton.innerHTML = "STOP";
    this.timer_id = setInterval(this.countDown.bind(this), 1000);
  }

  renderTime() {
    var second = this.remainingTime % 60;
    var minute = Math.floor(this.remainingTime / 60) % 60;

    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;

    this.displayTime.innerHTML = `${minute}:${second}`;
  }
  countDown() {
    this.remainingTime--;
    if (this.remainingTime < 0) {
      this.timeZeroHandler();
    }
    this.renderTime();

    //progress bar
    let percentCompleted = Math.round(
      100 - (this.remainingTime * 100) / this.duration
    );
    document.getElementById(
      "progress-bar"
    ).style.width = `${percentCompleted}%`;
  }

  stop() {
    this.startButton.innerHTML = "START";
    clearInterval(this.timer_id);
  }

  reset() {
    debugger;
    this.remainingTime = this.duration;
    this.renderTime();
  }

  timeZeroHandler() {
    this.stop();
    this.reset();
    if (this.state === "short" || this.state === "long") {
      document.getElementById("pomodoro").click();
    }
    /* let myAudio = new Audio('ring.mp3');
      myAudio.play();
      if (this.state === "pomodoro"){ 
         render completed on selected task like 1/2

      }

*/
  }
}
