document.getElementById("click").addEventListener("click", function() {
    alert("ღილაკზე დააჭირეთ!");
});


document.getElementById("input").addEventListener("input", function(e) {
    document.getElementById("output").textContent = e.target.value;
});

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    alert("ფორმა წარმატებით გაიგზავნა!");
});