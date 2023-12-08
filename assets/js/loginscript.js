function loginUser(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if (email===""){
        document.getElementById("email_error").innerHTML="Please fill up your Email";
        return false;
    }
    else{
        document.getElementById("email_error").innerHTML="";  
    }

    if (password===""){
        document.getElementById("password_error").innerHTML="Please fill up your Password";
      return false;
    }
    else {
        document.getElementById("password_error").innerHTML=""
    }

    let parsedData = JSON.parse(localStorage.getItem(email));
    if(email == parsedData.email && password == parsedData.password){

        // alert("user is valid")
        
        window.location.href = "../../homePage.html";
    }
    else{
        alert("invalid username");
    }



}



