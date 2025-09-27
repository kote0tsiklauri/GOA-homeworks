//* 1
fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
}).then(data => {
    console.log("Post #1 data:", data);
}).catch(err => {
    console.error("Error fetching post:", err);
});

//* 2
fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
}).then(users => {
    const names = users.map(user => user.name);
    console.log("User names:", names);
}).catch(err => {
    console.error("Error fetching users:", err);
});

// 3) user id=5 — მხოლოდ ელექტრონული ფოსტა
fetch("https://jsonplaceholder.typicode.com/users/5").then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
}).then(user => {
    console.log("Email of user 5:", user.email);
}).catch(err => {
    console.error("Error fetching user #5:", err);
});