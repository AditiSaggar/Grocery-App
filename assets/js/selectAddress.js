document.getElementById('addNewAddress').addEventListener('click', function (event) {
        event.preventDefault();

        var firstName = document.getElementById('fname').value;
        var mobileNo = document.getElementById('mobile').value;
        var houseNo = document.getElementById('houseNo').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var pinCode= document.getElementById('pinCode').value;
       
        document.getElementById('fname').value = '';
        document.getElementById('mobile').value = '';
        document.getElementById('houseNo').value = '';
        document.getElementById('city').value = '';
        document.getElementById('state').value = '';
        document.getElementById('pinCode').value = '';
        
        
        // Create an address object
        var newAddress = {
            firstName: firstName,
            mobileNo:mobileNo,
            houseNo: houseNo,
            city:city,
            state:state,
            pinCode: pinCode

        };

        localStorage.setItem('addresses', JSON.stringify(newAddress));

        window.location.href="../invoice.html";
});

  