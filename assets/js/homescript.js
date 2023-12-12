fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json();
    })
    .then((completedata) => {
        let data1 = "";
        completedata.map((values) => {
            data1 += `
            <div class="col-3">
                <div class="card text-center my-3" id="productCard-${values.id}" onclick="redirectToProductDetails(${values.id})">
                    <img src="${values.image}" alt="..."> 
                    <div class="card-body">
                        <h5 class="text-center">${values.title}</h5>
                        <p class="category">${values.category}</p>
                        <p class="price">₹ ${values.price}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>`;
        });
        document.getElementById("cards").innerHTML = data1;
    });

    // .catch((error) => {
    //     console.log(error);
    // });

function redirectToProductDetails(productId) {
    window.location.href = `./productDetails.html?id=${productId}`;
}  


function addToCartAndRedirect(productId) {
   
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let selectedProduct = completedata.find(product => product.id === productId);

    cartItems.push(selectedProduct);

  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    
    window.location.href = `../../shoppingCart.html`;
}

