window.onload = function() {
    const isDarkMode = confirm("გსურთ გადახვიდეთ შავ მოდზე?");
    const infoBox = document.getElementById("developer-info");

    if (isDarkMode) {
        document.body.style.background = "#333";
        document.body.style.color = "#fff"

        infoBox.style.background = "#444";
        document.body.style.color = "#fff"
    } else {
        
    }
};

// პროგრამისტის ინფორმაციის ჩვენება
function showInfo(developer) {
    const infoBox = document.getElementById("developer-info");

    let infoContent = "";
    if (developer === "dev1") {
        infoContent = `
            <h2>Alan Turing</h2>
            <img src="/day 56/homework/photo/AlanTuring.jfif" style="width: 200px; height: 200px; border-radius: 50%;">
            <p>Alan Turing was a British mathematician and computer scientist who contributed significantly to the growth of artificial intelligence, cryptography and computer science. He helped decipher the Enigma code during World War II and introduced the idea of the Turing Machine, a theoretical representation of a computer.</p>
        `;
    } else if (developer === "dev2") {
        infoContent = `
            <h2>Bill Gates</h2>
            <img src="/day 56/homework/photo/BillGates.jfif" alt="Bill Gates" style="width: 200px; height: 200px; border-radius: 50%;">
            <p>William Henry Gates III is an American businessman and philanthropist best known for his roles at Microsoft Corporation. He co-founded the software company with his childhood friend Paul Allen and later held the positions of chairman, chief executive officer, president, and chief software architect.</p>
        `;
    } else if (developer === "dev3") {
        infoContent = `
            <h2>Mark Zuckerberg</h2>
            <img src="/day 56/homework/photo/MarkZuckerberg.jfif" alt="Mark Zuckerberg" style="width: 200px; height: 200px; border-radius: 50%;">
            <p>Mark Elliot Zuckerberg is an American businessman who co-founded the social media service Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder.</p>
        `;
    }

    infoBox.innerHTML = infoContent;
    infoBox.style.display = "block";
}