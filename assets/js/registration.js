function validateForm() {
  const firstName = document.getElementById('fname').value.trim();
  if (firstName === '') {
    document.getElementById('fname_val').innerHTML = 'Please enter your first name';
  } 
  else {
    document.getElementById('fname_val').innerHTML = '';
  }

  const lastName = document.getElementById('lname').value.trim();
  if (lastName === '') {
    document.getElementById('lname_val').innerHTML = 'Please enter your last name';
  }
  else {
    document.getElementById('lname_val').innerHTML = '';
  }

  const email = document.getElementById('regEmail').value.trim();
  const emailRegex = /^[\w-._]+@[\w-._]+\.[a-zA-Z]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('email_val').innerHTML = 'Please enter a valid email address';
  } 
  else {
    document.getElementById('email_val').innerHTML = '';
  }

  const password = document.getElementById('password').value;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById('pwd_Val').innerHTML ='Password must be at least 8 characters long and contain one lowercase letter, one uppercase letter, and one number';
    return false;
  } 
  else {
    document.getElementById('pwd_Val').innerHTML = '';
  }

  const confirmPassword = document.getElementById('confirmPassword').value;
  if (confirmPassword !== password) {
    document.getElementById('conPwd_val').innerHTML = 'Passwords does not match';
  } 
  else{
    document.getElementById('conPwd_val').innerHTML = '';
  }

  const contact = document.getElementById('contact').value.trim();
  const contactRegex = /^[0-9]+$/;
  if (!contactRegex.test(contact)) {
    document.getElementById('contact_val').innerHTML = 'Please enter a valid phone number';
    return false;
  } 
  else {
    document.getElementById('contact_val').innerHTML = '';
  }

  let userDetails = {
    firstName : firstName,
    lastName : lastName,
    email : email,
    password : password,
    contact : contact
  };

  localStorage.setItem(email, JSON.stringify(userDetails));

  window.location.href = "./assets/pages/loginPage.html";

}