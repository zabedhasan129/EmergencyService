//heart icon counter
let count = 0
let heartbuttons = document.querySelectorAll(".common_heart")

let counter = document.getElementById("heartCounter")

for (let button of heartbuttons) {
    button.addEventListener("click", function () {
        count++;
        counter.innerText = count
    })
}

//show service name and number in alert and cuttin the coin
let coins = 100;
let coinValue = document.getElementById("coinValue")
let callButtons = document.querySelectorAll(".call-btn")

let time = new Date().toLocaleTimeString()

for (let btn of callButtons) {
    btn.addEventListener("click", function () {
        let card = btn.closest(".zabed")

        let name = card.querySelector(".name").innerText;
        let number = card.querySelector(".number").innerText;

        if (coins < 20) {
            alert("you have need 20 coins per call! you have less than 20  coins")
            return
        }
        alert(`Calling ${name} ${number}...`);

        coins -= 20;
        coinValue.innerText = coins

        let hsitoryList = document.getElementById("callHistory")
        let div = document.createElement("div")
        div.innerHTML = `<div class="flex items-center rounded-lg p-1 mt-1 bg-[#FAFAFA]">
                    <div class="flex justify-center gpa-[10px] items-center p-1">
                            <div><p class="text-[6px] font-semibold">${name}</p>
                            <p class="font-normal text-[2]">${number}</p></div>
                            <p class="text-[5px]">${time}</p>
                    </div>
                    
        
                </div>`
        hsitoryList.append(div)



    })


}
let hsitoryList = document.getElementById("callHistory")
let clearBtn = document.getElementById("clearhistory");

clearBtn.addEventListener("click", function () {
    hsitoryList.innerHTML = "";
})


let copyCount = 0
let copyCounter = document.getElementById("copy-counter")
let copyCounterBtn = document.querySelectorAll(".copy-btn")

for (let btn of copyCounterBtn) {
    btn.addEventListener("click", function () {
        let card = btn.closest(".zabed")

        let name = card.querySelector(".name").innerText;
        let number = card.querySelector(".number").innerText;


        let texttoCopy = `Name: ${name} Number:${number}`

        navigator.clipboard.writeText(texttoCopy)
        alert(`copied:${texttoCopy}`)




        copyCount++;
        copyCounter.innerHTML = `${copyCount}`


    })
}




