import { DonutMaker } from "/src/js/DonutMaker.js";

var companyModal = document.getElementById("company-modal");
var companyBtn = document.getElementById("company-btn");
var companySpan = document.getElementById("company-span");
companyBtn.onclick = function () {
    companyModal.style.display = "block";
}
companySpan.onclick = function () {
    companyModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == companyModal) {
        companyModal.style.display = "none";
    }
}
var creatorModal = document.getElementById("creator-modal");
var creatorBtn = document.getElementById("creator-btn");
var creatorSpan = document.getElementById("creator-span");
creatorBtn.onclick = function () {
    creatorModal.style.display = "block";
}
creatorSpan.onclick = function () {
    creatorModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == creatorModal) {
        creatorModal.style.display = "none";
    }
}

let newDonutMaker = new DonutMaker();

const makeDonuts = document.querySelector(".make-donuts");
const buyAutoClickers = document.querySelector(".buy-autoClickers");
const buyDonutMultipliers = document.querySelector(".buy-donutMultipliers");
const clickResetButton = document.querySelector(".reset-donuts");

const updateDonutCount = function() {
    const displayDonuts = document.querySelector(".display-donuts");
    displayDonuts.innerText = "Donuts: " + newDonutMaker.donutCount.toFixed(2);
    checkAutoClickerPurchaseButton();
    checkDonutMultiplierPurchaseButton();
}

const updateAutoClickerCount = function () {
    const displayAutoClickers = document.querySelector(".display-autoClicker-count");
    displayAutoClickers.innerText = "Count: " + newDonutMaker.autoClickerCount.toFixed(2);
}

const updateDonutClickValue = function () {
    const displayDonutClickValue = document.querySelector(".display-donut-click-value");
    displayDonutClickValue.innerText = "Click Value: " + newDonutMaker.clickValue.toFixed(2);
}

const updateAutoClickerPrice = function () {
    const displayAutoClickerPrice = document.querySelector(".display-autoClicker-price");
    displayAutoClickerPrice.innerText = "Price: " + newDonutMaker.autoClickerPrice.toFixed(2);
}

const updateDonutMultiplierCount = function () {
    const displayDonutMultipliers = document.querySelector(".display-donutMultiplier-count");
    displayDonutMultipliers.innerText = "Count: " + newDonutMaker.donutMultiplierCount.toFixed(2);
}

const updateDonutMultiplierPrice = function () {
    const displayDonutMultiplierPrice = document.querySelector(".display-donutMultiplier-price");
    displayDonutMultiplierPrice.innerText = "Price: " + newDonutMaker.donutMultiplierPrice.toFixed(2);
}

function initialState() {
    updateDonutCount();
    updateDonutClickValue();
    updateAutoClickerCount();
    updateAutoClickerPrice();
    updateDonutMultiplierCount();
    updateDonutMultiplierPrice();
}

function checkAutoClickerPurchaseButton() {
    const purchaseAutoClickerButton = document.querySelector(".buy-autoClickers");
    if (newDonutMaker.donutCount < newDonutMaker.autoClickerPrice) {
        purchaseAutoClickerButton.disabled = true;
    } else {
        purchaseAutoClickerButton.disabled = false;
    }
}

function checkDonutMultiplierPurchaseButton() {
    const purchaseDonutMultiplierButton = document.querySelector(".buy-donutMultipliers");
    if (newDonutMaker.donutCount < newDonutMaker.donutMultiplierPrice) {
        purchaseDonutMultiplierButton.disabled = true;
    } else {
        purchaseDonutMultiplierButton.disabled = false;
    }
}

function resetDonutMaker() {
    newDonutMaker = new DonutMaker();
}

clickResetButton.addEventListener("click", () => {
    resetDonutMaker();
    initialState();
});

buyDonutMultipliers.addEventListener("click", () => {
    newDonutMaker.addDonutMultiplier();
    updateDonutMultiplierCount();
    updateDonutMultiplierPrice();
    updateDonutClickValue();
});

buyAutoClickers.addEventListener("click", () => {
    newDonutMaker.addAutoClicker();
    updateAutoClickerCount();
    updateAutoClickerPrice();
});

makeDonuts.addEventListener("click", () => {
    newDonutMaker.addDonut();
    updateDonutCount();
});

setInterval(function () {
    newDonutMaker.autoClickersAddDonut();
    updateDonutCount();
}, 1000);

initialState();







