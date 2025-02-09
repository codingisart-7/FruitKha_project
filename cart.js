let cartContainer = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

function updateCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = ""; 
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<tr><td colspan="6">Your cart is empty.</td></tr>`;
        cartTotal.innerText = "0.00";
        return;
    }

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        let row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="decrease" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="increase" data-index="${index}">+</button>
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button class="remove" data-index="${index}">Remove</button></td>
        `;
        cartContainer.appendChild(row);
    });

    cartTotal.innerText = totalPrice.toFixed(2);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Attach event listeners for buttons
    document.querySelectorAll(".increase").forEach(button => {
        button.addEventListener("click", increaseQuantity);
    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", decreaseQuantity);
    });

    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", removeItem);
    });
}

// Function to increase quantity
function increaseQuantity(event) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = event.target.getAttribute("data-index");
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Function to decrease quantity
function decreaseQuantity(event) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = event.target.getAttribute("data-index");
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1); // Remove item if quantity is 1
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Function to remove an item from cart
function removeItem(event) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = event.target.getAttribute("data-index");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Load cart on page load
updateCart();
