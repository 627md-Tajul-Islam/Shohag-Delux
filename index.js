// 1st Function
// First Class Ticket ( + / - ) Function
function handleTicketChange(isIncrease) {
    const firstClassTicketInput = document.getElementById('firstclassticketcount');
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);
    // const firstClassTicketNewCount = firstClassTicketCount - 1;
    let firstClassTicketNewCount = firstClassTicketCount;
    if (isIncrease == true) {
        firstClassTicketNewCount = firstClassTicketCount + 1;
    }
    if (isIncrease == false && firstClassTicketCount > 0) {
        firstClassTicketNewCount = firstClassTicketCount - 1;
    }
    firstClassTicketInput.value = firstClassTicketNewCount;
    const firstClassTicketTotal = firstClassTicketNewCount * 150;
    document.getElementById('firstclasstickettotal').innerText = '$' + firstClassTicketTotal;
    calculateTotal()
}
// First Class Ticket Increase
document.getElementById('firstclassticketincrease').addEventListener('click', function() {
    handleTicketChange(true);
});

// First Class Ticket decrease
document.getElementById('firstclassticketdecrease').addEventListener('click', function() {
    handleTicketChange(false);
});




// 2nd Function

// Economy Class Ticket ( + / - ) Function
function handleEconomyChange(isDecrease) {
    const economyClassTicketInput = document.getElementById('economyclassticketcount');
    const economyClassTicketCount = parseInt(economyClassTicketInput.value);
    // const economyClassTicketNewCount = economyClassTicketCount - 1;
    let economyClassTicketNewCount = economyClassTicketCount;
    if (isDecrease == true) {
        economyClassTicketNewCount = economyClassTicketCount + 1;
    }
    if (isDecrease == false && economyClassTicketCount > 0) {
        economyClassTicketNewCount = economyClassTicketCount - 1;
    }
    economyClassTicketInput.value = economyClassTicketNewCount;
    const economyClassTicketTotal = economyClassTicketNewCount * 100;
    document.getElementById('economyclasstickettotal').innerText = '$' + economyClassTicketTotal;
    calculateTotal()
}
// Economy Class Ticket Increase
document.getElementById('economyclassticketincrease').addEventListener('click', function() {
    handleEconomyChange(true);
});

// Economy Class Ticket decrease
document.getElementById('economyclassticketdecrease').addEventListener('click', function() {
    handleEconomyChange(false);
});

function calculateTotal() {
    const firstClassTicketInput = document.getElementById('firstclassticketcount');
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);

    const economyClassTicketInput = document.getElementById('economyclassticketcount');
    const economyClassTicketCount = parseInt(economyClassTicketInput.value);

    const totalPrice = firstClassTicketCount * 150 + economyClassTicketCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

}
const confirmButton = document.getElementById('booknow');
confirmButton.addEventListener('click', function() {
    const fullArea = document.getElementById('full-area');
    fullArea.style.display = "none";
    const confirmation = document.getElementById("confirmation-area");
    confirmation.style.display = "block";
})

// // First Class Ticket Increase
// document.getElementById('firstclassticketincrease').addEventListener('click', function() {
//     const firstClassTicketInput = document.getElementById('firstclassticketcount');
//     const firstClassTicketCount = parseInt(firstClassTicketInput.value);
//     const firstClassTicketNewCount = firstClassTicketCount + 1;
//     firstClassTicketInput.value = firstClassTicketNewCount;
//     const firstClassTicketTotal = firstClassTicketNewCount * 150;
//     document.getElementById('firstclasstickettotal').innerText = '$' + firstClassTicketTotal;
// });

// // First Class Ticket decrease
// document.getElementById('firstclassticketdecrease').addEventListener('click', function() {
//     const firstClassTicketInput = document.getElementById('firstclassticketcount');
//     const firstClassTicketCount = parseInt(firstClassTicketInput.value);
//     const firstClassTicketNewCount = firstClassTicketCount - 1;
//     firstClassTicketInput.value = firstClassTicketNewCount;
//     const firstClassTicketTotal = firstClassTicketNewCount * 150;
//     document.getElementById('firstclasstickettotal').innerText = '$' + firstClassTicketTotal;
// });