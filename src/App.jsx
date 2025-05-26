import { useState } from "react";
import MyButton from "./components/MyButton";

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

  const handleRemoveByIndex = (deletedIndex) => {
    const newArticlesArray = articlesArray.filter(
      (_, index) => index !== deletedIndex
    );
    setArticlesArray(newArticlesArray);
  };

  const handleClickMyButton = (valore) => {
    console.log("Valore passato dal bottone: " + valore);

    console.log("My button cliccato");
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
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
        <div className="row my-3">
          <div className="col-4">
            <ul>
              {articlesArray.map((article, index) => (
                <li key={index} className="my-3">
                  {article}
                  <button
                    className="btn btn-danger mx-3"
                    onClick={(e) => handleRemoveByIndex(index)}
                  >
                    Delete article
                  </button>
                  <MyButton handleClick={handleClickMyButton} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
