// 1) ახსენით რა არის jsx

// JSX  lets you write HTML-like code inside JavaScript.
// It makes React components easier to write and read.


// 2) ახსენით რა განსხვავებაა js-ით შექმნილი ფაილსა და jsx-ით შექმნილ ფაილს შორის? რატო ვქმნით jsx

// .js files → regular JavaScript code
// .jsx files → can include JSX syntax (HTML inside JS)


// 3) ახსენი რა არის კომპონენტი.
// A component is a reusable piece of UI that returns React elements.


// 4) შექმენი კომპონენტი, რომელიც ბეჭდავს მისალმებას. 
function Greet(){
    return <h1>hello</h1>
}


// 5) შექმენი ორი კომპონენტი: Header და Footer.

function Header() {
    return (
      <header>
        
      </header>
    );
}
  
function Footer() {
    return (
      <footer>
    
      </footer>
    );
}

// 6) შექმენი კომპონენტი, რომელიც აჩვენებს პროდუქტის სახელს, ფასს და ფოტოს.

function Product({ name, price, image }) {
    return (
      <div className="product">
        <img src={image} alt={name} width="150" />
        <h2>{name}</h2>
        <p>price: {price}</p>
      </div>
    );
}