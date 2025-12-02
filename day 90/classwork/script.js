const main = document.querySelector('main')

let size = 20



for(let i=0;i<10;i++){
    let newDiv = document.createElement('div')
    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';
    newDiv.style.backgroundColor = 'blue';
    newDiv.style.margin = '5px';

    main.prepend(newDiv);

    size *= 1.5
}

