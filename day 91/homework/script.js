function addTask() {
    const taskContainer = document.getElementById("taskContainer");
    const userInput = document.getElementById("userInput").value;

    if (userInput === "") {
        alert("გთხოვთ, შეიყვანოთ რიცხვი!");
        return;
    }

    const num = parseInt(userInput);
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    if (num > 20) {
        
        taskContainer.appendChild(createTaskDiv(num));
    } else {
        taskContainer.insertBefore(createTaskDiv(num), taskContainer.firstChild);
    }

    
    const lastDigit = num % 10;
    const squareDiv = document.createElement("div");
    squareDiv.style.width = "50px";
    squareDiv.style.height = "50px";
    squareDiv.style.margin = "5px";

    if (lastDigit === 1) {
        squareDiv.style.backgroundColor = "red";
    } else if (lastDigit === 2) {
        squareDiv.style.backgroundColor = "green";
    } else if (lastDigit === 3) {
        squareDiv.style.backgroundColor = "blue";
    } else {
        squareDiv.style.backgroundColor = "yellow";
    }

    if (num % 2 === 0) {
        const circleDiv = document.createElement("div");
        circleDiv.classList.add("blue-circle");
        taskDiv.appendChild(circleDiv);
    } else {
        taskDiv.appendChild(squareDiv);
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const cycleDiv = document.createElement("div");
            cycleDiv.classList.add("task");
            cycleDiv.style.backgroundColor = getRandomColor();
            taskContainer.appendChild(cycleDiv);
            taskContainer.removeChild(taskContainer.firstChild);
        }, i * 1000);
    }

}

function createTaskDiv(num) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.style.backgroundColor = getRandomColor();
    div.textContent = `რიცხვი: ${num}`;
    return div;
}

function getRandomColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6"];
    return colors[Math.floor(Math.random() * colors.length)];
}