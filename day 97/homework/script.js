const ageInput = document.getElementById("ageInput");
    const colorInput = document.getElementById("colorInput");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    ageInput.addEventListener("input", () => {
      const age = parseInt(ageInput.value);
      if (!isNaN(age)) {
        body.style.backgroundColor = age > 18 ? "green" : "red";
      }
    });

    colorInput.addEventListener("input", () => {
      const color = colorInput.value.trim();
      body.style.backgroundColor = color;
    });

    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
        body.classList.add("light");
      }
    });