import { useState } from "react";

function App() {
  const [articlesArray, setArticlesArray] = useState([
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
  ]);
  const [newArticle, setNewArticle] = useState("");

  return (
    <main>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <form>
              <input
                type="text"
                className="form-control"
                value={newArticle}
                onChange={(e) => setNewArticle(e.target.value)}
              />
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
          <div className="col">
            <ul>
              {articlesArray.map((article, index) => (
                <li key={index}>{article}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
