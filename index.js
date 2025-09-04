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
