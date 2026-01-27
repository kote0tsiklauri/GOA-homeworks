const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    // 1) Counter
    const [num, setNum] = React.useState(0);

    // 2) Hello / Goodbye
    const [isHello, setIsHello] = React.useState(true);

    // 3) Input live text
    const [text, setText] = React.useState("");

    // 4) Filter list
    const [filter, setFilter] = React.useState("");
    const names = ["Anna", "Nika", "Gio", "Luka", "Mariam", "Sopo"];

    // 5) Number list with remove
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
    const removeNumber = (n) => {
        setNumbers(numbers.filter(num => num !== n));
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>

            {/* 1) Counter */}
            <h2>1) Counter</h2>
            <button onClick={() => setNum(prev =>prev - 1)}>-</button>
            <span style={{ margin: "0 10px" }}>{num}</span>
            <button onClick={() => setNum(prev =>prev + 1)}>+</button>

            {/* 2) Hello / Goodbye */}
            <h2>2) Hello / Goodbye</h2>
            <p>{isHello ? "Hello" : "Goodbye"}</p>
            <button onClick={() => setIsHello(prev => !prev)}>
                Change
            </button>

            {/* 3) Live typing */}
            <h2>3) You typed</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <p>You typed: {text}</p>

            {/* 4) Filter names */}
            <h2>4) Filter Names</h2>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Type name..."/>
            <ul>
                {names.filter(n => n.toLowerCase().includes(filter.toLowerCase())).map((n, i) => <li key={i}>{n}</li>)}
            </ul>

            {/* 5) Number list with remove */}
            <h2>5) Numbers with Remove</h2>
            <ul>
                {numbers.map((n, i) => (
                    <li key={i}>
                        {n} <button onClick={() => removeNumber(n)}>remove</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}


root.render(<Main />)