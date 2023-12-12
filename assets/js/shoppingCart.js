
document.addEventListener("DOMContentLoaded", function () {
    let cartBody = document.getElementById("cartBody");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

cartItems.forEach(cartItem => {
        fetch(`https://fakestoreapi.com/products/${cartItem.id}`)
            .then(response => response.json())
            .then(productDetails => {
                let row = document.createElement("tr");

                let productCell = document.createElement("td");
                productCell.textContent = productDetails.title;
                row.appendChild(productCell);

                let imageCell = document.createElement("td");
                imageCell.innerHTML = `<img src="${productDetails.image}" alt="${productDetails.title}">`;
                row.appendChild(imageCell);

                let priceCell = document.createElement("td");
                priceCell.textContent = `₹${productDetails.price}`;
                row.appendChild(priceCell);

                let quantityCell = document.createElement("td");
                quantityCell.textContent = cartItem.quantity;
                row.appendChild(quantityCell);

                let subtotalCell = document.createElement("td");
                subtotalCell.textContent = `₹${productDetails.price * cartItem.quantity}`;
                row.appendChild(subtotalCell);

                let removeCell = document.createElement("td");
                removeCell.innerHTML = `<button class="btn btn-danger" onclick="removeProduct(${productDetails.id})">Remove</button>`;
                row.appendChild(removeCell);

                cartBody.appendChild(row);

                document.getElementById("totalPrice").textContent = `₹${productDetails.price * cartItem.quantity}`;

            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    });

    updateCartTotal();
});

function removeProduct(productId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let updatedCart = cartItems.filter(item => item.id !== productId);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    window.location.reload();
}

function updateCartTotal() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let totalAmount = cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity;
    }, 0);

}
