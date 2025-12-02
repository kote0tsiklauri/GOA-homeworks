const txt = document.getElementById("txt");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    if (txt.textContent === "Hello world") {
       
        txt.classList.add("hidden");
        
        txt.textContent = "ნახვადის"

        txt.textContent= ""
    } else {

        txt.textContent = "Hello world";
        txt.classList.remove("hidden");
    }
});