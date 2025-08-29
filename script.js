// default value for coin=100, heart=0, copy=0
let hearts = 0, coins = 100, copies = 0
const historyList = document.getElementById('history-list');

// for counting heart

const heartBtns = document.getElementsByClassName("heart-btn");
for (let btn of heartBtns) {
    btn.addEventListener("click", function () {
        hearts++;
        document.getElementById("total-heart").innerText = hearts;
    });
}

// for counting total copy click alert part (challange part)
const copyBtns = document.getElementsByClassName("copy-btn");
for (let btn of copyBtns) {
    btn.addEventListener("click", function () {
        copies++;
        document.getElementById("total-copy").innerText = copies;
        const num = btn.parentNode.parentNode.parentNode.childNodes[7].innerText;

        alert(`✅Number has been copied ${num}`)

    });
}

// for clear history
document.getElementById("clear-history").addEventListener("click", function () {
    const histoy = document.getElementById("card-container");
    histoy.innerHTML = "";
});

// for counting coin after call
const callBtn = document.getElementsByClassName("call-btn")
for (let callButton of callBtn) {
    callButton.addEventListener("click", function () {
        if (coins >= 20) {
            const title = callButton.parentNode.parentNode.parentNode.childNodes[3].innerText;
            const number = callButton.parentNode.parentNode.parentNode.childNodes[7].innerText;
            const time = new Date().toLocaleTimeString();

            const cardContainer = document.getElementById("card-container");
            const newCard = document.createElement("div");

            newCard.innerHTML = `< div class= "flex justify-between items-center border-2 border-white bg-[#FAFAFA] rounded-xl m-2 " >
    <div class="p-2">
    <h2 class="font-semibold text-[14px]">"${title}"</h2>
    <p>"${number}"</p >
</div >
        <div class="p-2">
           ${time}
        </div>
</div >

            `;

            cardContainer.append(newCard);
            coins -= 20;
            document.getElementById("total-coin").innerText = coins;
            alert(`📞 Calling ${title} at ${number}........`)

        }
        else {
            alert("❌ You Don't Have Enough Balance. Minimum 20 Coins Need for call")
        }

    });
}



















