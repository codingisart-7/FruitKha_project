let products = [
    { id: "1", name: "Strawberry", image: "product-img-1.jpg", price: 85 },
    { id: "2", name: "Berry", image: "product-img-2.jpg", price: 70 },
    { id: "3", name: "Lemon", image: "product-img-3.jpg", price: 35 },
    { id: "4", name: "Kiwi", image: "product-img-4.jpg", price: 50 },
    { id: "5", name: "Green Apple", image: "product-img-5.jpg", price: 45 },
    { id: "6", name: "Strawberry", image: "product-img-6.jpg", price: 80 }
];

let shopContainer = document.getElementById("shop-container");

// Ensure products display properly
function displayProducts() {
    shopContainer.innerHTML = ""; // Clear previous content
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("shop_pro");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" 
                data-price="${product.price}" data-image="${product.image}">
                Add to Cart
            </button>
        `;
        shopContainer.appendChild(productDiv);
    });

    // Attach event listeners after rendering products
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

// Function to add item to cart
function addToCart(event) {
    let button = event.target;

    let product = {
        id: button.getAttribute("data-id"),
        name: button.getAttribute("data-name"),
        price: parseFloat(button.getAttribute("data-price")), // Ensure price is a number
        image: button.getAttribute("data-image"),
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // alert(`${product.name} added to cart!`);

    // Redirect to cart page
    window.location.href = "cart.html";
}

// Load products on page load
displayProducts();
