import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Form= () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      console.error("All fields are required!");
      return;
    }

    console.log("Form data:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Password"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};