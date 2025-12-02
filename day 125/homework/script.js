//* 1

new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Operation successful!");
    }, 2000);
}).then(res => console.log(res))

//* 2
new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Operation successful!");
    }, 3000);
}).catch(res => console.log(res))

//* 3
new Promise((resolve) => {
    resolve("Step 1 done");
}).then(res => {
    return res + " -> Step 2 done";
}).then(res => {
    return res + " -> Step 3 done";
}).then(res => {
    console.log(res);
});