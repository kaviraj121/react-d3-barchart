import React, { useState } from "react";
import BarChart from "./BarChart";
import useInterval from "./useInterval";
import "./App.css";

const getRandomIndex = (array) => {
  return Math.floor(array.length * Math.random());
};

function App() {
  const [iteration, setIteration] = useState(0);
  const [start, setStart] = useState(false);
  const [data, setData] = useState([
    {
      name: "Javascript",
      value: 67.7,
      color: "#f4efd3",
    },
    {
      name: "HTML/CSS",
      value: 63.1,
      color: "#cccccc",
    },
    {
      name: "SQL",
      value: 54.7,
      color: "#c2b0c9",
    },
    {
      name: "Python",
      value: 44.1,
      color: "#9656a1",
    },
    {
      name: "Java",
      value: 40.2,
      color: "#fa697c",
    },
    {
      name: "Bash/Shell/PowerShell",
      value: 33.1,
      color: "#fcc169",
    },
    {
      name: "C#",
      value: 31.4,
      color: "#F0FFFF",
    },
    {
      name: "PHP",
      value: 26.2,
      color: "#F0E68C",
    },
  ]);

  useInterval(() => {
    if (start) {
      const randomIndex = getRandomIndex(data);
      setData(
        data.map((entry, index) =>
          index === randomIndex
            ? {
                ...entry,
                value: entry.value + 10,
              }
            : entry
        )
      );
      setIteration(iteration + 1);
    }
  }, 500);

  return (
    <React.Fragment>
      <h1>Programming language Bar Chart</h1>
      <BarChart data={data} />
      <button onClick={() => setStart(!start)}>
        {start ? "Stop the race" : "Start the race!"}
      </button>
      <p>Iteration: {iteration}</p>
    </React.Fragment>
  );
}

export default App;
