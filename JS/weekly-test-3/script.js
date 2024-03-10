const Products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
];

const leftBox = document.getElementById('leftBox');
const rightBox = document.getElementById('rightBox');
const cart = [];

leftBox.style.border = "5px solid grey";
leftBox.style.width = "250px";
// leftBox.style.padding = "20px";



// rightBox.style.margin = "20px";
rightBox.style.border = "5px solid grey";
rightBox.style.width = "300px";



function renderProducts() {
    leftBox.innerHTML = '';
    Products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <span>${product.name}</span>
            <span>Price: ${product.price}</span>
            <button onclick="addToCart(${product.id})" style="background-color: lightblue;">+</button>
            <span>1</span>
            <button onclick="removeFromCart(${product.id})" style="background-color: lightblue;">-</button>
        `;
        leftBox.appendChild(productItem);
    });
}

function renderCart() {
    rightBox.innerHTML = '';
    if (cart.length === 0) {
        const noProductMessage = document.createElement('div');
        noProductMessage.textContent = 'No Product added to the cart';
        rightBox.appendChild(noProductMessage);
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Total Price: ${item.quantity * item.price}</span>
            `;
            rightBox.appendChild(cartItem);
        });
    }
}

function addToCart(productId) {
    const product = Products.find(item => item.id === productId);
    const cartItemIndex = cart.findIndex(item => item.id === productId);

    if (cartItemIndex !== -1) {
        // Product already in the cart, increase quantity
        cart[cartItemIndex].quantity++;
    } else {
        // Product not in the cart, add it
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
    renderProducts();
}

function removeFromCart(productId) {
    const cartItemIndex = cart.findIndex(item => item.id === productId);

    if (cartItemIndex !== -1) {
        // Decrease quantity and remove if it becomes zero
        cart[cartItemIndex].quantity--;
        if (cart[cartItemIndex].quantity === 0) {
            cart.splice(cartItemIndex, 1);
        }

        renderCart();
        renderProducts();
    }
}

renderProducts();
renderCart();
