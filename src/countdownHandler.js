import { CountDownTimer } from "./timer.js";
debugger;

export let newCount = { er: new CountDownTimer("pomodo") }; //it needs to be object to be able to be declared in other files

export const timeHandler = (event) => {
  debugger;

  if (event.target.innerHTML === "START") {
    newCount.er.start(this);
  } else {
    newCount.er.stop(this);
  }
};
