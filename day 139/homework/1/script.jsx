function Header() {
    return <header style={{ padding: "20px", fontSize: "24px" }}>ეს არის Header</header>;
}

function Main() {
    const [text, setText] = React.useState("ეს არის მთავარი ტექსტი");

    return (
        <main style={{ padding: "20px" }}>
            <p>{text}</p>
            <img 
            src="https://via.placeholder.com/150" 
            alt="Example" 
            style={{ display: "block", margin: "10px 0" }} 
            />

            <button onClick={() => setText("ტექსტი შეიცვალა!")}>
            შეცვალე ტექსტი
            </button>
        </main>
    );
}

function Footer() {
    return <footer style={{ padding: "20px", fontSize: "18px" }}>ეს არის Footer</footer>;
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


