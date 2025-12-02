function validateForm(event) {
    event.preventDefault(); 
    const userName = document.getElementById("username");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");


    errorMessage.textContent = "";
    errorMessage.style.color = "darkRed";

    let pasVal = password.value;
    let userval = userName.value;

    if ( userval == "" || pasVal == "") {
        errorMessage.textContent = "Please fill out all fields.";
        
        return;
    }


    if (pasVal.length < 4 ||  pasVal.length > 12) {
        errorMessage.textContent = "your surname has to be longer that 4 and shorter than 12";
        return
    }

    const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.";
    if (!validChars.includes(password)) {
        errorMessage.textContent = "passwords must contain words, numbers, -, ., or _!";
        return;
    }


    window.location.href = "#";
}