// Get Earned EDIs
const earnedEDI = document.getElementsByClassName("earned-edi-card");

// Get Max Btn
const maxBtn = document.getElementById("max-edi");

// Get Withdraw EDI Button
const withdrawEdiBtn = document.querySelector(".withdraw-edi-btn");

// Get conCode Input element
const conCode = document.querySelector("#conCode");


// Event Listener
maxBtn.addEventListener("click", getEarnedEDI);
withdrawEdiBtn.addEventListener("click", withdrawEarnedEDI);


// Convert HTML Collection to Array
let earnedEDIArray = new Array(earnedEDI);

// Earned EDI Coin
let earnedEdiAmount;


// Loop through each earned edi in the array
earnedEDIArray.forEach(edi => {

    // Add click event listener to edi
    edi[0].addEventListener("click", () => {
        earnedEdiAmount = edi[0].lastElementChild.firstChild.nextSibling.lastElementChild.lastElementChild.innerText
    });
})


// Functions
function getEarnedEDI() {
    // Add earned edi amount to con code input
    conCode.value = earnedEdiAmount;
}

function withdrawEarnedEDI() {}