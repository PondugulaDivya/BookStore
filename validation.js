
const validatePurchase = () => {
    const bookTitle = document.purchaseForm.bookTitle.value;
    const quantity = document.purchaseForm.quantity.value;

    if (!bookTitle) {
        alert("Please enter a book title.");
        return false;
    }
    if (quantity < 1) {
        alert("Quantity must be at least 1.");
        return false;
    }
    return true;
};

const validatePayment = () => {
    const cardNumber = document.paymentForm.cardNumber.value;
    const expiryDate = document.paymentForm.expiryDate.value;
    const cvv = document.paymentForm.cvv.value;

    if (!cardNumber.match(/^[0-9]{16}$/)) {
        alert("Please enter a valid 16-digit card number.");
        return false;
    }
    if (!expiryDate) {
        alert("Please enter the expiry date.");
        return false;
    }
    if (!cvv.match(/^[0-9]{3}$/)) {
        alert("Please enter a valid 3-digit CVV.");
        return false;
    }
    return true;
};

const validateOrderStatus = () => {
    const orderId = document.orderStatusForm.orderId.value;
    if (!orderId) {
        alert("Please enter a valid order ID.");
        return false;
    }
    return true;
};
