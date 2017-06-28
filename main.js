//grab everything that I need
const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');
const priceLabel = document.querySelector('.price-label');


// create the functions that I need
function calculateCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const cost = price * quantity;

    total.innerText = '$' + cost.toFixed(2);
}

function updateQuantityLabel() {
    const quantity = quantityInput.value;
    quantityLabel.innerText = quantity;
};

function updatePriceLabel() {
    const price = priceInput.value;
    priceLabel.innerText = '$ ' + price;
};

// on  first run
calculateCost();


// add event listeners
priceInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', updateQuantityLabel);
priceInput.addEventListener('input', updatePriceLabel);
