const root = ReactDOM.createRoot(document.getElementById("root"));

function Main(){
    const text = React.useState("hello");
    const handleClick = () =>{
        text[1]("Goodbye!")
    }
    return<div className="container">
        <h1 className="header">{text[0]}</h1>
        <button onClick={handleClick}>Change text</button>
        
    </div>
}
function Counter(){
    const count = React.useState(0);

    const increase = () => count[1](count[0] + 1);
    const decrease = () => count[1](count[0] - 1);

    return <div className="container">
        <h2 className="header">Count: {count[0]}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>;
}


function ColorBox(){
    const color = React.useState("lightblue");

    const toggleColor = () => {
        color[1](color[0] === "lightblue" ? "lightcoral" : "lightblue");
    };

    return <div className="container" style={{background: color[0]}}>
        <h2 className="header">Color Box</h2>
        <button onClick={toggleColor}>Toggle Color</button>
    </div>;
}



function ShowHide(){
    const show = React.useState(true);

    const toggle = () => {
        show[1](!show[0]);
    };

    return <div className="container">
        {show[0] && <h2 className="header">Welcome to React!</h2>}
        <button onClick={toggle}>Show / Hide</button>
    </div>;
}


function Emoji(){
    const emoji = React.useState("😀");

    const toggleEmoji = () => {
        emoji[1](emoji[0] === "😀" ? "😢" : "😀");
    };

    return <div className="container">
        <h2 className="header" style={{fontSize:"3rem"}}>{emoji[0]}</h2>
        <button onClick={toggleEmoji}>Toggle Emoji</button>
    </div>;
}

function AlertBox(){
    const showAlert = () => {
        alert("Hello! This is an alert.");
    };

    return <div className="container">
        <button onClick={showAlert}>Show Alert</button>
    </div>;
}

function ChangeTextAgain(){
    const text = React.useState("Hello!");

    const changeText = () => {
        text[1]("Hi there!");
    };

    return <div className="container">
        <h2 className="header">{text[0]}</h2>
        <button onClick={changeText}>Change Text</button>
    </div>;
}


function App(){
    return <>
        <Main />
        <Counter />
        <ColorBox />
        <ShowHide />
        <Emoji />
        <AlertBox />
        <ChangeTextAgain />
    </>;
}

root.render(<App />)