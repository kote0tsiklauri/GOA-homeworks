import { useState } from "react";

export default function StudentsList() {
  const [students, setStudents] = useState([
    { name: "Alice", score: 60 },
    { name: "Bob", score: 45 },
    { name: "Charlie", score: 80 },
  ]);

  const passingStudents = students.filter((s) => s.score > 51);
  const passedCount = passingStudents.length;

  return (
    <div>
      <h3>Passing students ({passedCount})</h3>
      <ul>
        {passingStudents.map((s) => (
          <li key={s.name}>
            {s.name} - {s.score}
          </li>
        ))}
      </ul>
    </div>
  );
}