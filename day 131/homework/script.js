//*1) localStorage გამოიყენება მონაცემების ბრაუზერში ხანგრძლივად შენახვისთვის

//*2  localStorage მეთოდები:
// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear()
// key(index)
// length

//* 3
// setItem("name", "value") -> მონაცემის შენახვა
// getItem("name") -> მონაცემის წამოღება
// removeItem("name") -> კონკრეტული მონაცემის წაშლა
// clear() -> ყველა მონაცემის წაშლა
// key(0) -> ინდექსით key-ის მიღება
// length -> ელემენტების რაოდენობა

//* 4
localStorage.setItem("greeting", "გამარჯობა");

//* 5
let greet = localStorage.getItem("greeting");
console.log(greet);

//* 6

//* 7
let greetAgain = localStorage.getItem("greeting");

//* 8
localStorage.setItem("name", "თაზო");
let myName = localStorage.getItem("name");
console.log(myName);

//* 9
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    localStorage.setItem("input1", input1.value);
    localStorage.setItem("input2", input2.value);
});

//* 10
const numbers = [1, 2, 3, 4, 5];
localStorage.setItem("numbers", JSON.stringify(numbers));
let storedNumbers = JSON.parse(localStorage.getItem("numbers"));
console.log(storedNumbers);