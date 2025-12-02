function fun(i){
    const container = document.getElementById("posts");
    i.forEach(elem => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
          <h2>${elem .title}</h2>
          <p>${elem.body}</p>
        `;
        container.appendChild(div);
    });
}


fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => fun(data));