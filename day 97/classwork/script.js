// function nextId(ids) {
//     let id = 0;
//     while (ids.includes(id)) {
//       id++;
//     }
//     return id;
// }

let previousLength = 0;
document.querySelector("input").addEventListener("input", ()=>{
    const currentLength = input.value.length;
    const diff = currentLength - previousLength;

    if (diff > 0) {
    console.log(`დამატებულია ${diff}`);
    } else if (diff < 0) {
    console.log(`წაშლილია ${Math.abs(diff)}`);
    }

    previousLength = currentLength;
})