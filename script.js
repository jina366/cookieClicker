let otterNum = 0;
let rateNum = 0;

const otterNumDisplay = document.querySelector("#otterNum");
const rateNumDisplay = document.getElementById("rateNum");
const buttonCount = document.querySelector(".otter");

setInterval(function () {
  otterNum = otterNum + rateNum;
  otterNumDisplay.innerText = otterNum;

  if (otterNum > 4) {
    all[0].style.display = "flex";
  }
  if (otterNum > 14) {
    all[1].style.display = "flex";
  }
  if (otterNum > 38) {
    all[2].style.display = "flex";
  }
  if (otterNum > 112) {
    all[3].style.display = "flex";
  }
  if (otterNum > 375) {
    all[4].style.display = "flex";
  }
  if (otterNum > 1162) {
    all[5].style.display = "flex";
  }
  if (otterNum > 2812) {
    all[6].style.display = "flex";
  }
  if (otterNum > 4875) {
    all[7].style.display = "flex";
  }
  if (otterNum > 9375) {
    all[8].style.display = "flex";
  }
  if (otterNum > 22500) {
    all[9].style.display = "flex";
  }
}, 1000);

buttonCount.addEventListener("click", function () {
  otterNum++;
  otterNumDisplay.innerText = otterNum;
});

const all = document.getElementsByClassName("diet-choice");



// clam
let clamQuantity = 0;
let clamBuy = 1;
let clamCost = 15;

const clamButtonPush = document.getElementById("clamButton");
const clamQDisplay = document.getElementById("clamQuantity");
const clamCDisplay = document.getElementById("clamCost");

clamButtonPush.addEventListener("click", function () {
  if (otterNum >= clamCost) {
    clamQuantity++;
    clamQDisplay.innerText = clamQuantity;
    otterNum = otterNum - clamCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + clamBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// snail
let snailQuantity = 0;
let snailBuy = 2;
let snailCost = 30;

const snailButtonPush = document.getElementById("snailButton");
const snailQDisplay = document.getElementById("snailQuantity");
const snailCDisplay = document.getElementById("snailCost");

snailButtonPush.addEventListener("click", function () {
  if (otterNum >= snailCost) {
    snailQuantity++;
    snailQDisplay.innerText = snailQuantity;
    otterNum = otterNum - snailCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + snailBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// sea urchin
let urchinQuantity = 0;
let urchinBuy = 5;
let urchinCost = 75;

const urchinButtonPush = document.getElementById("urchinButton");
const urchinQDisplay = document.getElementById("urchinQuantity");
const urchinCDisplay = document.getElementById("urchinCost");

urchinButtonPush.addEventListener("click", function () {
  if (otterNum >= urchinCost) {
    urchinQuantity++;
    urchinQDisplay.innerText = urchinQuantity;
    otterNum = otterNum - urchinCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + urchinBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// crab
let crabQuantity = 0;
let crabBuy = 15;
let crabCost = 225;

const crabButtonPush = document.getElementById("crabButton");
const crabQDisplay = document.getElementById("crabQuantity");
const crabCDisplay = document.getElementById("crabCost");

crabButtonPush.addEventListener("click", function () {
  if (otterNum >= crabCost) {
    crabQuantity++;
    crabQDisplay.innerText = crabQuantity;
    otterNum = otterNum - crabCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + crabBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// shrimp
let shrimpQuantity = 0;
let shrimpBuy = 50;
let shrimpCost = 750;

const shrimpButtonPush = document.getElementById("shrimpButton");
const shrimpQDisplay = document.getElementById("shrimpQuantity");
const shrimpCDisplay = document.getElementById("shrimpCost");

shrimpButtonPush.addEventListener("click", function () {
  if (otterNum >= shrimpCost) {
    shrimpQuantity++;
    shrimpQDisplay.innerText = shrimpQuantity;
    otterNum = otterNum - shrimpCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + shrimpBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// abalone
let abaloneQuantity = 0;
let abaloneBuy = 155;
let abaloneCost = 2325;

const abaloneButtonPush = document.getElementById("abaloneButton");
const abaloneQDisplay = document.getElementById("abaloneQuantity");
const abaloneCDisplay = document.getElementById("abaloneCost");

abaloneButtonPush.addEventListener("click", function () {
  if (otterNum >= abaloneCost) {
    abaloneQuantity++;
    abaloneQDisplay.innerText = abaloneQuantity;
    otterNum = otterNum - abaloneCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + abaloneBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// fish
let fishQuantity = 0;
let fishBuy = 375;
let fishCost = 5625;

const fishButtonPush = document.getElementById("fishButton");
const fishQDisplay = document.getElementById("fishQuantity");
const fishCDisplay = document.getElementById("fishCost");

fishButtonPush.addEventListener("click", function () {
  if (otterNum >= fishCost) {
    fishQuantity++;
    fishQDisplay.innerText = fishQuantity;
    otterNum = otterNum - fishCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + fishBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// sea star
let starQuantity = 0;
let starBuy = 650;
let starCost = 9750;

const starButtonPush = document.getElementById("starButton");
const starQDisplay = document.getElementById("starQuantity");
const starCDisplay = document.getElementById("starCost");

starButtonPush.addEventListener("click", function () {
  if (otterNum >= starCost) {
    starQuantity++;
    starQDisplay.innerText = starQuantity;
    otterNum = otterNum - starCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + starBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// eel
let eelQuantity = 0;
let eelBuy = 1250;
let eelCost = 18750;

const eelButtonPush = document.getElementById("eelButton");
const eelQDisplay = document.getElementById("eelQuantity");
const eelCDisplay = document.getElementById("eelCost");

eelButtonPush.addEventListener("click", function () {
  if (otterNum >= eelCost) {
    eelQuantity++;
    eelQDisplay.innerText = eelQuantity;
    otterNum = otterNum - eelCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + eelBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});

// octopus
let octopusQuantity = 0;
let octopusBuy = 3000;
let octopusCost = 45000;

const octopusButtonPush = document.getElementById("octopusButton");
const octopusQDisplay = document.getElementById("octopusQuantity");
const octopusCDisplay = document.getElementById("octopusCost");

octopusButtonPush.addEventListener("click", function () {
  if (otterNum >= octopusCost) {
    octopusQuantity++;
    octopusQDisplay.innerText = octopusQuantity;
    otterNum = otterNum - octopusCost;
    otterNumDisplay.innerText = otterNum;
    rateNum = rateNum + octopusBuy;
    rateNumDisplay.innerText = rateNum;
  } else {
    alert("Not enough money!");
  }
});






// function clickScore() {
//     otterNum ++
//     otterNumDisplay.innerText = otterNum
// }

// buttonCount.addEventListener('click', (evt) => {
//     console.log(evt)
//     return clickScore(evt)
// }
// )