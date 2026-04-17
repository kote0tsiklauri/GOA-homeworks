import { useState } from "react";

export const ProfileCard = () => {
  const [user, setUser] = useState({
    name: "Kote",
    age: 20,
    city: "Tbilisi"
  });

  const [newCity, setNewCity] = useState(""); 

  const handleCityChange = () => {

    setUser((prev) => ({
      ...prev,
      city: newCity
    }));

    setNewCity("");
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <input
        type="text"
        value={newCity}
        placeholder="Enter new city"
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button onClick={handleCityChange}>Update City</button>
    </div>
  );
};