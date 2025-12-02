function highlightChild() {
    const number = document.getElementById('childNumber').value;
    const children = document.querySelectorAll('.child');


    // თუ რიცხვი ვალიდურია, შესაბამის child-ს ვაძლევთ highlight კლასს
    if (number >= 1 && number <= children.length) {

        const selectedChild = children[number - 1];
        selectedChild.style.background = "lightblue";
    
        if (selectedChild.innerHTML.trim() !== "") {
            alert("This Div has child/content!");
        } else {
            alert("This Div is empty!");
        }
    
    } else {
        alert('არასწორი რიცხვი!');
    }
}