const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    //* 1
    const [isBtnHidden, setIsBtnHidden] = React.useState(false)
    
    //* 2
    const [isPswHidden, setIsPswHidden] = React.useState(false)

    //* 3
    const [visible, setVisible] =React.useState(false);

    //* 4
    const [isLightMode, setIsLightMode] =React.useState(false);

    //* 5
    const [role,setRole] = React.useState("outsider")
        function Student() {
        return <h3>I am a Student</h3>;
    }

    function Teacher() {
        return <h3>I am a Teacher</h3>;
    }


    //* 6
    const [age, setAge] = React.useState("");

    //* 7
    const [status, setStatus] = React.useState(""); 

    const handleClick = () => {
        setStatus("loading");
        setTimeout(() => {
            setStatus("loaded");
        }, 3000);
    };

    return (
        <div style={{display:"block"}}>
            {/* 1 */}
            <div>
                <h2>homework 1</h2>
                {isBtnHidden ? <></> : <p>Hello World</p>}
                <button onClick={() => setIsBtnHidden(prev => !prev)}>{
                    isBtnHidden ? "show" : "hide"
                }</button>
            </div>
            
            {/* 2 */}
            <div>
                <h2>homework 2</h2>
                {isPswHidden ? <input type="password" /> : <input type="text"/>}
                <br/>
                <button onClick={() => setIsPswHidden(prev => !prev)}>{
                    isPswHidden ? "show password" : "hide password"
                }</button>
            </div>

            {/* 3 */}
            
            <div>
                <h2>homework 3</h2>
                
                {visible && <h2>Welcome, user!</h2>}

                <button onClick={() => setVisible(perv => !perv)}>
                    {visible ? "Hide" : "Show"}
                </button>
            </div>
            {/* 4 */}

            <div>
                <h2>homework 4</h2>
                {isLightMode ? <div style={{ background:"lightBlue"}}>hello</div> : <div style={{ background:"darkBlue"}}>hello</div>}
                <button onClick={() => setIsLightMode(prev => !prev)}>{
                    isLightMode ? "dark mode" : "light mode"
                }</button>

            </div>

            {/* 5 */}

            <div>
                <h2>homework 5</h2>
                <select value={role} onChange={event => setRole(event.target.value)}>
                    <option value="">Choose role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>

                {role === "student" && <Student />}
                {role === "teacher" && <Teacher />}
            </div>

            {/* 6 */}
            <div>
                <h2>homework 6</h2>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age"/>

                {age !== "" && (
                    <>
                        {Number(age) >= 18 ? (<p>You are an adult</p>) : (<p>You are underage</p>)}
                    </>
                )}
            </div>
            {/* 7 */}
            <div>
                <h2>homework 7</h2>

                <button onClick={handleClick}>Load data</button>

                {status === "loading" && <p>Loading...</p>}
                {status === "loaded" && <p>Data loaded!</p>}
            </div>
        </div>
    );
}


root.render(<Main />)