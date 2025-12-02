function Header() {
    const style = {
        backgroundColor: "#f2c4ff",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "22px"
    };

    return <header style={style}>Header Component</header>;
}

function MainSection() {
    const style = {
        backgroundColor: "#c4ffe1",
        padding: "25px",
        borderRadius: "15px",
        fontSize: "20px"
    };

    return <main style={style}>Main Section Component</main>;
}

function Footer() {
    const style = {
        backgroundColor: "#c4e0ff",
        padding: "15px",
        borderRadius: "8px",
        fontSize: "18px"
    };

    return <footer style={style}>Footer Component</footer>;
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