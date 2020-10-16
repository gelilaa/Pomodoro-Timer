import { newCount } from "./countdownHandler.js";
import { CountDownTimer } from "./timer.js";

export const tabHandler = (event) => {
  debugger;

  const target = event.target;
  let displayTime = document.getElementById("displayTime");
  

  if (target.innerHTML === "Short Break") {
    document.body.style.background = "rgb(75, 165, 170)";
    displayTime.innerHTML = "05:00";
    document.getElementById('start').style.color="rgb(75, 165, 170)";
    target.className = "btn active";
    target.style.background ="none rgba(0, 0, 0, 0.15)";
     
    deactivate(event.currentTarget);
    document.getElementById("working-on").innerHTML = "Time for a break";

  } else if (target.innerHTML === "Long Break") {
    document.body.style.background = "rgb(73, 143, 193)";
    displayTime.innerHTML = "15:00";
    document.getElementById('start').style.color="rgb(73, 143, 193)";
    target.className = "btn active";
    target.style.background ="none rgba(0, 0, 0, 0.15)"
    deactivate(event.currentTarget);
    document.getElementById("working-on").innerHTML = "Time for a break";
   
  } else {
    document.body.style.background = "rgb(240, 91, 86)";
    displayTime.innerHTML = "25:00";
     document.getElementById('start').style.color= "rgb(240, 91, 86)";
    target.className = "btn active";
    target.style.background ="none rgba(0, 0, 0, 0.15)"
    document.getElementById("working-on").innerHTML = "Time to work!";
    deactivate(event.currentTarget);
    
    
  }
  

  let stateTab = document.getElementsByClassName("btn active")[0];
  let state = stateTab.id;
  newCount.er.stop(this);

  newCount.er = new CountDownTimer(state);

  function deactivate(parent) {
    Array.from(parent.children).forEach((element) => {
      if (element !== event.target) {
        element.className = "btn";
        element.style.background = 'none';
      }
    });
  }
};
