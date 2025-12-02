const id = document.getElementById("id");
const adviceText = document.getElementById("advice");
const nextButton = document.getElementById("next");

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const advice = data.slip;
    id.textContent = `Advice #${advice.id}`;
    adviceText.textContent = `"${advice.advice}"`;
  } catch (error) {
    console.error("Error fetching advice:", error);
    adviceText.textContent = `"Oops! Couldn't fetch advice. Try again."`;
  }
}



nextButton.addEventListener("click", fetchAdvice);