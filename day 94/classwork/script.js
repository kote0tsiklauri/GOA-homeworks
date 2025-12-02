const result = document.getElementById('result')
const div = document.querySelector("div")
const child = div.children

for (let i = 0; i < child.length; i++) {
    let par = child[i]
    result.innerHTML += "par" 
}