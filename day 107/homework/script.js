const type = [13,"ana","work",0.2];

let newType = type.map(i => typeof i === "string")
console.log(newType)




const score = [60,45,85,100,55,90]

let pass = score.filter(i => i > 70)
console.log(pass)




const array1 = [1, 2, 3, 4];



const countA = array.reduce((acc, item) => {
    return item === 'a' ? acc + 1 : acc;
  }, 0);