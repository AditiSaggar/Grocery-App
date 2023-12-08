// // // fetch('https://fakestoreapi.com/products').then((data)=>{
// // //     return data.json();
// // // }).then((completedata)=>{
// // //     console.log(completedata[2].title);
// // //     document.getElementById('root').innerHTML=completedata[2].title;
// // // })

// // fetch('https://fakestoreapi.com/products').then((data)=>{
// //     return data.json();  //json file converted into object
// // }).then((completedata)=>{
// //   // console.log(completedata[2].title);
// //   let data1="";
// //  completedata.map((values)=>{
// //    data1+=`<div class="col-3">
// //             <div class="card text-center my-3">
// //               <img src="${values.image}" alt="...">
// //               <div class="card-body">
// //                 <h5 class="text-center">${values.title}</h5>
// //                  <p class="category">${values.category}</p>
// //                 <p class="price">₹ ${values.price}</p>
// //                 <button><a href="./cart.html" class="btn btn-primary">Add to Cart</a></button>
// //                 <button><a href="./productDetails.html" class="btn btn-warning">View Details</a></button>
// //               </div>
// //               </div>
// //             </div>`
// //     });
// //    document.getElementById("cards").innerHTML=data1;

// // }).catch((error)=>{
// //    alert("error in loading");
// // });


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
    })
    .catch((error) => {
        console.log(error);
    });

function redirectToProductDetails(productId) {
    window.location.href = `./productDetails.html?id=${productId}`;
}



function addToCartAndRedirect(productId) {
    // Fetch the current cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Find the selected product in the completedata array
    const selectedProduct = completedata.find(product => product.id === productId);

    // Add the selected product to the shopping cart
    cartItems.push(selectedProduct);

    // Update the cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Navigate to the shopping cart page
    window.location.href = `../../shoppingCart.html`;
}

