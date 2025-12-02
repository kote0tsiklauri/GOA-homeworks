const boxStyle = {
    backgroundColor: "#ffeeaa",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "18px"
};
  
function StyledBox() {
    return <div style={boxStyle}>Styled Box</div>;
}

function NestedBoxes() {
    const box1 = {
        backgroundColor: "red",
        width: "300px",
        padding: "20px"
    };
  
    const box2 = {
        backgroundColor: "green",
        width: "200px",
        padding: "20px"
    };
  
    const box3 = {
        backgroundColor: "blue",
        width: "100px",
        padding: "20px"
    };
  
    return (
        <div style={box1}>
            <div style={box2}>
                <div style={box3}></div>
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <StyledBox />
            <NestedBoxes />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);