let id = document.getElementById('id1');

let elem = document.getElementsByClassName('class1');

let divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {
    divs[i].innerHTML = 'This is a modified div!';
}