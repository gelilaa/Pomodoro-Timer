import { todolist } from './task.js'
export class CountDownTimer {
  timer_id;
  pomodoro;
  //remainingTime;
  constructor(state) {
    this.displayTime = document.getElementById("displayTime");
    if (state === "short") {
      this.duration = 300; //to be changed to 300 in final release
    } else if (state === "long") {
      this.duration = 900; //to be changed to 900 in final release
    } else {
      this.duration = 1500; //to be changed to 15000 in final release
    }
    this.state = state;
    this.remainingTime = this.duration;
    this.startButton = document.getElementById("start");
    document.getElementById("progress-bar").style.width = "0%"; //reset progress bar
    
  }

  start() {
    this.startButton.innerHTML = "STOP";
    let startAudio = new Audio('click.mp3')
    startAudio.play();
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
     let myAudio = new Audio('ring.mp3');
      myAudio.play();
    if (this.state === "short" || this.state === "long") {
      document.getElementById("pomodoro").click();
        
    }
   
      const ii=document.getElementById('work').innerHTML
      const jj = document.getElementsByName('input1');
      for (let i = 0; i < jj.length; i++) {
        const element = jj[i].value;
   if (element === ii ) {
    var pomo = new todolist();
    pomo.state.pom++;
    pomo.state.pomodoro = document.getElementById('to').innerText
         const btn= jj[i].nextSibling.nextSibling.nextSibling;
         btn.innerHTML = pomo.state.pom+'/'+ "<span id='to'>"+pomo.state.pomodoro+'</span>';
      
        }
        
        
      }
      
   
     
  
    
    

     

     
  }
}
