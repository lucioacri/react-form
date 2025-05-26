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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticlesArray = [...articlesArray, newArticle];
    setArticlesArray(newArticlesArray);
    setNewArticle("");
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit} className="justify-content-center">
              <input
                type="text"
                className="form-control"
                value={newArticle}
                onChange={(e) => setNewArticle(e.target.value)}
              />
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
        <div className="col">
          <ul>
            {articlesArray.map((article, index) => (
              <li key={index}>{article}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
