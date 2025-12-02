let container = document.getElementById('container');

let htmlContent = '';

for (let i = 1; i <= 10; i++) {
  htmlContent += `<div id="div-${i}" style="margin: 10px; padding: 20px; background-color: lightblue; border: 1px solid #000;">
                    Div ${i}
                  </div>`;
}


container.innerHTML = htmlContent;