import React, { useState } from "react";
import axios from "axios"
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Alert from "./components/Alert";
import Recipe from "./components/Recipe";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const YOUR_APP_ID = 'e97354c0'
  const YOUR_APP_KEY = 'e5d8e28200bd26a7e4cb8a6097c13694'
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(URL);
      if (!result.data.more) {
        return setAlert("Нет еды с таким названием");
      }
      setRecipes(result.data.hits);
      console.log(recipes);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Не введено название еды");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  const onSelectClick = val => {
    setQuery(val)
  }

  return (
    <div className="App">
      <h1>Приложение для поиска рецептов</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Введите наименование (на английском - chicken)"
        />
        <input type="submit" value="Поиск" />
      </form>
      <div className="selectClick">
        <button onClick={() => {onSelectClick('chicken')}}>Курица</button>
        <button onClick={() => {onSelectClick('pizza')}}>Пицца</button>
      </div>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
