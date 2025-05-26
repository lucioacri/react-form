import { useState } from "react";

function App() {
  const articlesArray = ["lorem", "ipsum", "dolor", "sit", "amet"];

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              {articlesArray.map((article) => (
                <li>{article}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
