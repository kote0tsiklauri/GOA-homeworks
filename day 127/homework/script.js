const p1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 done"), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Promise failed"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 done"), 1500));

Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(error => console.log(error));



function randomPromise(name) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5
        ? resolve(name + " resolved")
        : reject(name + " rejected");
    }, 1000);
    });
}

const p4 = randomPromise("Promise 1");
const p5 = randomPromise("Promise 2");
const p6 = randomPromise("Promise 3");

Promise.all([p4, p5, p6])
    .then(results => console.log("All resolved:", results))
    .catch(error => console.log("One failed:", error));