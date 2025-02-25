let btnx = document.querySelector(".button1");
let btno = document.querySelector(".button2");

var count = 0;
let movehistory = [];

function validateinput() {
  let inputfield = document.querySelector("#text");
  let errormsg = document.querySelector("#error-msg");

  let value = +inputfield.value;

  if (value < 0 || value > 8) {
    inputfield.style.border = "2px solid red";
    errormsg.innerText = "enter the number between 0 to 8";
    errormsg.style.color = "red";
    inputfield.innertext = "";
    return false;
  } else {
    inputfield.style.border = "";
    errormsg.innerText = "";
    return true;
  }
}

function clickOnX() {
  if (!validateinput()) return;
  let boxnumber = document.getElementById("text").value;

  boxnumber = parseInt(boxnumber);

  const selector = `.container > .item:nth-child(${boxnumber + 1}) .draw`;
  let box = document.querySelector(selector);

  const selector2 = `.container > .item:nth-child(${boxnumber + 1})`;
  let box2 = document.querySelector(selector2);

  let value = box.innerText;
  if (!box || value === "X" || value === "O") {
    return;
  }

  box.innerText = "X";
  btnx.disabled = true;
  btno.disabled = false;
  box2.style.backgroundColor = "#559cad";
  movehistory.push({ box: boxnumber });
  count++;

  if (count > 5) {
    removeoldestmove();
  }
}

function clickOnO() {
  if (!validateinput()) return;
  let boxnumber = document.getElementById("text").value;
  debugger;
  boxnumber = parseInt(boxnumber);
  const selector = `.container > .item:nth-child(${boxnumber + 1}) .draw`;
  let box = document.querySelector(selector);

  const selector2 = `.container > .item:nth-child(${boxnumber + 1}) `;
  let box2 = document.querySelector(selector2);

  let value = box.innerText;
  if (!box || value === "X" || value === "O") {
    return;
  }

  box.innerText = "O";
  btnx.disabled = false;
  btno.disabled = true;
  box2.style.backgroundColor = "#c1b2ab";
  count++;

  if (count > 5) {
    removeoldestmove();
  }
}

function removeoldestmove() {
  let firstmove = movehistory.shift();
  let boxnumber = firstmove.box;

  const selector = `.container > .item:nth-child(${boxnumber + 1}) .draw`;
  let box = document.querySelector(selector);

  const selector2 = `.container > .item:nth-child(${boxnumber + 1}) `;
  let box2 = document.querySelector(selector2);

  if (box) {
    box.innerHTML = "";
    box2.style.backgroundColor = "";
  }

  count--;
}
