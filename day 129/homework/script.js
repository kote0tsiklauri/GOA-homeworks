document.getElementById("fetchBtn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => {
        return response.json();
      }).then(data => {
        console.log(data)
        document.getElementById("result").innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.body}</p>
        `;
      }).catch(err => {
        document.getElementById("result").innerHTML = `<p style="color:red;">Error: ${err}</p>`;
      });
});