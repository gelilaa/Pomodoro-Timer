"use strict";
console.log("init");
//debugger;
import { timeHandler } from "./countdownHandler.js";
import { tabHandler } from "./tabHandler.js";
const startButton = document.getElementById("start");
startButton.addEventListener("click", timeHandler);

document
  .getElementsByClassName("card-header text-center")[0]
  .addEventListener("click", tabHandler);
