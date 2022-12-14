import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="">
        <h3 className="">{people.length} birthdays today</h3>
        <List people={people} />
        <button className="" onClick={() => setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
