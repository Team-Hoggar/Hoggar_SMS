import React, { useState } from "react";
import axios from "axios";
import { generate } from "shortid";
import "./App.css";

import { AddStudentButton, StudentTable, Navbar } from "./components";
import { StudentData } from "./types";

// export async function getStudents(): Promise<StudentData> {
//   const { data } = await axios.get<IStudentDataResponse>(
//     "http://API_URL/endpoint"
//   );

//   const { name, age } = data;

//   return { name, age };
// }

function App(): JSX.Element {
  const [rows, setRows] = useState<StudentData[]>([
    {
      // Feed MySQL database through here using axios, replace placeholder data
      id: "45",
      firstName: "test",
      lastName: "ladasdast",
      age: 6,
      grade: "1",
      email: "eadwad@sadsadas.com",
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <AddStudentButton
        onSubmit={(data) => {
          setRows((currentRows) => [
            {
              id: generate(),
              ...data,
            },
            ...currentRows,
          ]);
        }}
      />
      <StudentTable rows={rows} />
    </div>
  );
}

export default App;
