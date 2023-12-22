// document.addEventListener('DOMContentLoaded', function () {
//     // Retrieve the selected/default address index from local storage
//     var defaultAddressIndex = parseInt(localStorage.getItem('defaultAddress')) || 0;

//     // Retrieve addresses and order details from local storage
//     var addresses = JSON.parse(localStorage.getItem('addresses')) || [];
//     var orderDetails = JSON.parse(localStorage.getItem('orderDetails')) || [];

let getAddress = JSON.parse(localStorage.getItem("addresses")) || [];
let address = document.getElementById("address");
  address.innerHTML = `<div class="col-6">
  <h6 class="fw-bold">Order ID: <span class="fw-normal">${getAddress.orderId}</span></h6>
  <h6 class="fw-bold">Date: <span class="fw-normal">${getAddress.Date}</span></h6>
   <h6 class="fw-bold">Contact us: <span class="fw-normal">${getAddress.Contact}</span></h6>

  </div>
  <div class="col-6 ">
  <h6 class="fw-bold">Customer Name: <span class="fw-normal">${getAddress.firstName}</span></h6>
  <h6 class="fw-bold">Mobile No: <span class="fw-normal">${getAddress.mobileNo}</span></h6>
   <h6 class="fw-bold">House No.: <span class="fw-normal">${getAddress.houseNo}</span></h6>
   <h6 class="fw-bold">State: <span class="fw-normal">${getAddress.state}</span></h6>
   <h6 class="fw-bold">City: <span class="fw-normal">${getAddress.city}</span></h6>
   <h6 class="fw-bold">Pin Code: <span class="fw-normal">${getAddress.pinCode}</span></h6>
   
  </div>
 
  `;
//     // Display the selected/default address and order details in the invoice
//     displayInvoiceContent(addresses[defaultAddressIndex], orderDetails);

//     function displayInvoiceContent(address, orderDetails) {
//         var detailsContainer = document.querySelector('.details');
//         var tableBody = document.querySelector('.table tbody');

//         // Display address details
//         if (address) {
//             var addressHTML = `
//                 <p><strong>Customer Name:</strong> ${getAddress.firstName}</p>
//                 <p><strong>Mobile:</strong> ${getAddress.mobileNo</p>
//                 <p><strong>Address:</strong> ${getAddress.houseNo</p>
//                 <p><strong>City:</strong> ${getAddress.state}</p>
//                 <p><strong>State:</strong> ${getAddress.city}</p>
//                 <p><strong>Pin Code:</strong> ${getAddress.pinCode}</p>
//             `;
//             detailsContainer.innerHTML = addressHTML;
//         } else {
//             detailsContainer.innerHTML = '<p>No address selected.</p>';
//         }

//         // Display order details
//         if (orderDetails && orderDetails.length > 0) {
//             tableBody.innerHTML = ''; // Clear existing table content

//             orderDetails.forEach(function (item, index) {
//                 var row = `
//                     <tr>
//                         <td><strong>${index + 1}</strong></td>
//                         <td>${item.productName}</td>
//                         <td>${item.image}</td>
//                         <td>${item.count}</td>
//                         <td>${item.totalAmount}</td>
//                     </tr>
//                 `;
//                 tableBody.innerHTML += row;
//             });

//             // Calculate and display total amount
//             var totalAmount = orderDetails.reduce(function (total, item) {
//                 return total + item.totalAmount;
//             }, 0);

//             var totalRow = `
//                 <tr>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td><strong>Total Amount:</strong></td>
//                     <td>${totalAmount}</td>
//                 </tr>
//             `;
//             tableBody.innerHTML += totalRow;
//         } else {
//             tableBody.innerHTML = '<tr><td colspan="5">No items in the order.</td></tr>';
//         }
//     }

//     // Function to navigate back to home page
//     window.goToHome = function () {
//         window.location.href = './homePage.html';
//     };
// });

document.addEventListener("DOMContentLoaded", function () {
    let cartBody = document.getElementById("invoiceItem");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

cartItems.forEach(cartItem => {
        fetch(`https://fakestoreapi.com/products/${cartItem.id}`)
            .then(response => response.json())
            .then(productDetails => {
                let row = document.createElement("tr");

                let productCell = document.createElement("td");
                productCell.textContent = productDetails.title;
                row.appendChild(productCell);
                
                let quantityCell = document.createElement("td");
                quantityCell.innerHTML = `${cartItem.quantity}`;
                row.appendChild(quantityCell);

                let subtotalCell = document.createElement("td");
                subtotalCell.innerHTML = `₹${productDetails.price * cartItem.quantity}`;
                row.appendChild(subtotalCell);

                cartBody.appendChild(row);

                document.getElementById("totalPrice").textContent = `₹${productDetails.price * cartItem.quantity}`;

            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    });

    updateCartTotal();
});