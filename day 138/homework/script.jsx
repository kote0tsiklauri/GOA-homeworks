function Header(){
    return  <div>App made in React</div>
}

function Main(){
    console.log("hello")
    return <div >
        <img src="*" alt="image"></img>
        <button >press it</button>
        <div>
            <div></div>
        </div>
    </div>
}

function Footer(){
    return  <div>footer</div>
}

function App() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
}
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);












ReactDom.createRoot(document.getElementById("root")).render(<App />)