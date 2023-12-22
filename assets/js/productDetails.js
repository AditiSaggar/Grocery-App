document.addEventListener("DOMContentLoaded", function () {
    let product1 = new URLSearchParams(window.location.search);
    let productId = product1.get("id");
    let productDetailsContainer = document.getElementById('productDetails');

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(productDetails => {
            productDetailsContainer.innerHTML = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${productDetails.image}" alt="${productDetails.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title mt-3"><strong>${productDetails.title}</strong></h2>
                            <p class="card-price"><strong>Price: </strong>₹${productDetails.price}</p>
                            <input type="number" class="quantity-input p-2 " value="3" min="3" max="10">
                            <p class="mt-2"><strong>Product Description: </strong></p>
                            <p class="card-text">${productDetails.description}</p>
                            <button class="btn btn-warning p-2 mt-3" onclick="addToCart(${productId})">Add to Cart</button>
                        </div>
                    </div>
                </div>`;
        })
        .catch(error => {
            alert("Page is not loading");
        });
});

function addToCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let existingProduct = cartItems.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cartItems.push({
            id: productId,
            quantity: 3
        });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    window.location.href = "../../shoppingCart.html";
}
