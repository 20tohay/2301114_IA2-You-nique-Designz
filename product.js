// Global arrays to store cart items
let cartItems = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    cartTotal += productPrice;

    // Save cart data to LocalStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotal', cartTotal);

    // Update the cart item count in the navbar
    document.getElementById('cart-item-count').textContent = cartItems.length;
}

//Checkout Button function
function checkout() {
    const selectedProducts = [];
    const checkboxes = document.querySelectorAll('input[name="product"]:checked');

    checkboxes.forEach((checkbox) => {
        const productName = checkbox.value;
        const productPrice = parseFloat(checkbox.closest('.product-page').querySelector('.price').textContent.replace('$', ''));

        selectedProducts.push({ name: productName, price: productPrice });
    });

    if (selectedProducts.length > 0) {
        // Store the selected products in LocalStorage
        localStorage.setItem('cartItems', JSON.stringify(selectedProducts));

        // Calculate total price
        const totalPrice = selectedProducts.reduce((total, product) => total + product.price, 0);
        localStorage.setItem('cartTotal', totalPrice);

        // Redirect to the invoice page
        window.location.href = 'Invoice.html';
    } else {
        alert('No products selected');
    }
}

// Ensure to update the checkout button in the HTML
document.getElementById('checkout-btn').onclick = checkout;

