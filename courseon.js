// LOGIN BUTTON EVENT HANDLER
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    const emailInfo = document.getElementById("email").value;
    const passwordInfo = document.getElementById("password").value;
    if(emailInfo == "" && passwordInfo == ""){
        transactionArea.style.display = "block";
        alert("Login Successful")
    }
    else{
        alert("You have entered wrong password")
        loginArea.style.display = "block";
    }
})

