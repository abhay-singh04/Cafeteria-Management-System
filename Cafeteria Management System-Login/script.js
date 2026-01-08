function showNotification(message) {
    let notif = document.getElementById("notification");
    notif.innerText = message;


    notif.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    notif.style.opacity = '1';
    notif.style.transform = 'translate(-50%, -50%) scale(1.2)';


    setTimeout(() => {
        notif.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);  


    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transform = 'translate(-50%, -50%) scale(0.8)';
    }, 1000);
}


function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ itemName: name, itemPrice: price });
    localStorage.setItem("cart", JSON.stringify(cart));


    showNotification(name + " added to cart!");
}


if (document.title === "Your Cart") {
    loadCart();
}


function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let total = 0;


    cartContainer.innerHTML = "";


    cart.forEach((item, index) => {
        total += item.itemPrice;


        cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.itemName} - ₹${item.itemPrice}</span>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });


    document.getElementById("total").innerText = "Total: ₹" + total;
}


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}


function placeOrder() {
    showNotification("Your order has been placed!");
    localStorage.removeItem("cart");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}
