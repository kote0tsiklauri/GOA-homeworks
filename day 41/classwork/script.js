const friend1 = {
    name: "luka",
    age: 17,
    height: 172,
    weight: 70,
    familyMembers: 3,
};

const friend2 = {
    name: "rafi",
    age: 16,
    height: 168,
    weight: 60,
    familyMembers: 5,
};

const friend3 = {
    name: "zura",
    age: 18,
    height: 182,
    weight: 68,
    familyMembers: 4,
};

console.log(friend1, friend2 , friend3, friend1.age, friend1.name , friend2.weight, friend2.familyMembers, friend3.height,friend3.age)
friend1.age = 21


friend1.lastname = "ლაპატინი"
delete friend1.name

// ობიექტია ისა რასაც ვხედავთ და ვეხებით ობიექტს აქ კუთვნილებები რომელის შეცვლაც შეგვიზლია


document.body.p.style.color = "red"