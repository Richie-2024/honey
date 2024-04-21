// Function to add product to cart
function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${productName} - $${price}</p>
        <button class="delete-btn">Delete</button>
    `;
    cartItems.appendChild(cartItem);
}

// Event listener for Add to Cart buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const price = product.querySelector('p').innerText.replace('$', '');
        addToCart(productName, price);
    });
});

// Event listener for Delete buttons
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const cartItem = event.target.parentElement;
        cartItem.remove();
    }
});


// Function to rotate product image
function rotateProductImage(event) {
    const productContainer = event.target.closest('.product');
    const productImage = productContainer.querySelector('.sweet img');
    let currentImageIndex = parseInt(productImage.dataset.currentIndex) || 0;
    const maxImages = 4; // Assuming you have 4 images for each product (front, back, left, right)

    currentImageIndex = (currentImageIndex + 1) % maxImages; // Rotate to the next image
    productImage.src = `product1-${currentImageIndex}.jpg`; // Update the image src
    productImage.alt = `Product 1 ${getImageDirection(currentImageIndex)}`;
    productImage.dataset.currentIndex = currentImageIndex; // Update the current index
}

// Function to get the direction of the image
function getImageDirection(index) {
    switch(index) {
        case 0: return "Front";
        case 1: return "Back";
        case 2: return "Left";
        case 3: return "Right";
        default: return "";
    }
}

// Add event listener to rotate button for each product
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', rotateProductImage);
});

function validateForm() {
    // Get form inputs
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();

    // Validate form inputs
    if (name === '' || email === '' || address === '') {
        alert('Please fill in all fields.');
        return false; // Prevent form submission
    }

    // You can add more validation rules here

    // If all validations pass, allow form submission
    return true;
}
