import { useState } from "react";

function App() {
  // 1 Name (real-time)
  const [name, setName] = useState("");

  // 2 Email submit
  //  შექმენი ფორმა email input-ით და submit ღილაკით, სადაც submit-ზე გამოიყენებ event.preventDefault()-ს და alert-ში აჩვენებ შეყვანილ email-ს.

  const [email, setEmail] = useState("");

  // 3 Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  // 4 One state object
  const [formData, setFormData] = useState({
    name2: "",
    email2: "",
    age: "",
  });

  // 5 Checkbox
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState("");

  const handleEmailSubmit = fromEmailData => {
    const email = fromEmailData.get('email');
    setEmail(email);
    alert(`Email submitted: ${email}`);
  };

  const handleLoginSubmit = formLoginData => {
    const username = formLoginData.get('username');
    const password = formLoginData.get('password');
    setUsername(username);
    setPassword(password);

    if (username === "" || password === "") {
      setLoginMsg("Invalid credentials");
    } else {
      setLoginMsg("Login successful");
      
    }
  };

  const handleFormChange = fromChangeData => {
    const name2 = fromChangeData.get('name2');
    const email2 = fromChangeData.get('email2');
    const age = fromChangeData.get('age');

    setFormData({
      name2,
      email2,
      age,
    });
  };

  const handleAgreeSubmit = fromAgreeData => {
    const agree = fromAgreeData.get('checkbox');
    if (!agree) {
      setAgreeError("You must agree first");
    } else {
      setAgreeError("");
      alert("Form submitted");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* 1 Name */}
      <h2>1. Name Form</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <p>Your name: {name}</p>

      <hr />

      {/* 2 Email */}
      <h2>2. Email Form</h2>
      <form action={handleEmailSubmit}>
        <input type="email" placeholder="Email" name='email' />
        <button>Submit</button>
      </form>

      <hr />

      {/* 3 Login */}
      <h2>3. Login Form</h2>
      <form action={handleLoginSubmit}>
        <input placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
        <p>{loginMsg}</p>
      </form>

      <hr />

      {/* 4 One state object */}
      <h2>4. One State Object</h2>
      <form action={handleFormChange}>
        <input name="name2" placeholder="Name" type="text" />
        <input name="email2" placeholder="Email" type="email" />
        <input name="age" placeholder="Age" type="number"/>
        <button>Update</button>
      </form>
      

      <p>{formData.name2}</p>
      <p>{formData.email2}</p>
      <p>{formData.age}</p>

      <hr />

      {/* 5 Checkbox */}
      <h2>5. Agreement</h2>
      <form action={handleAgreeSubmit}>
        <label>
          <input type="checkbox" name="checkbox" /> I agree
        </label>
        <br />
        <button>Submit</button>
        <p>{agreeError}</p>
      </form>
    </div>
  );
}

export default App;