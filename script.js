let coins = 100, hearts = 0, copies = 0;
const coinSpan = document.getElementById('coin-count')
const historyList = document.getElementById('history-list');

// for counting heart
const totalHeart = document.getElementById("total-heart");

const heartBtns = document.getElementsByClassName("heart-btn");
for (let btn of heartBtns) {
    btn.addEventListener("click", function () {
        hearts++;
        document.getElementById("total-heart").innerText = hearts;
    });
}

// for counting total copy click
const totalCopy = document.getElementById('total-copy');
const copyBtns = document.getElementsByClassName("copy-btn");
for (let Btns of copyBtns) {
    btn.addEventListener("click", function () {
        copies++;
        document.getElementById("total-copy").innerText = copies;
    });
}


