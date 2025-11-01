let arr = [1,2,3,4,5]
localStorage.setItem("array",JSON.stringify(arr))


function saveData() {
    let val1 = document.getElementById("n1").value;
    let val2 = document.getElementById("n2").value;
    let val3 = document.getElementById("n3").value;

    let userData = {
      first: val1,
      second: val2,
      third: val3
    };

    localStorage.setItem("formData", JSON.stringify(userData));

    let storedData = JSON.parse(localStorage.getItem("formData"));
    console.log(storedData);
}