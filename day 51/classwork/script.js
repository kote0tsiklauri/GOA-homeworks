const lightMode = document.getElementById("light-Mode")
const darkMode = document.getElementById("dark-Mode")

lightMode.addEventListener('click', function(){
    document.body.style.backgroundColor =  'rgb(228 216 216)';
});

darkMode.addEventListener('click', function() {
    document.body.style.backgroundColor =  'rgb(51 51 51)';
});


for(let i=100;i<1000; i+=2) {
    console.log(i)
    
}