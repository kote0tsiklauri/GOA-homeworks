const validChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.";
  //* ვამოწმებთ პაროლში არსებულ სიმბოლოებს შეესაბამება თუ არა
  //* ვალიდურ სიმბოლოებს
  for (let i = 0; i < password.length; i++) {
    isvalidChar = true

    for (let j = 0;j < validChars.length; j++){
        if (password[i] == validChars[j]){
            isvalidChar = false
            return;
        }
    }

    if (!isValidChar) {
        message.style.color = "#8b1c00";
        message.textContent = "Password must only contain numbers, letters, -, . or ";
        return;
    }
    
  message.style.color = "#eee8a9";
  message.textContent = "Password Saved";
}