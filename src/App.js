import "./App.css";
import Body from "./components/UI/Body";
import Header from "./components/UI/Header";
import React, { useState } from "react";
import uniqueRandom from "unique-random";
import Welcome from "./components/UI/Welcome";

let countarray = [];
let recipeData = [];

function App() {
  const [rescipeDetail, setRescipeDetail] = useState([]);
  const [welcome, setWelcome] = useState(false);

  const recipeListHandler = async () => {
    recipeData = [];
    return await fetch(fetchHandler("sweet potato"))
      .then(await fetchHandler("onion"))
      .then(await fetchHandler("bean"))
      .then(await fetchHandler("corn"))
      .then(await fetchHandler("grape"))
      .then(await fetchHandler("apple"))
      .then(await fetchHandler("potato"));
  };

  const fetchHandler = async data => {
    setWelcome(true);

    const req = await fetch(
      `https://forkify-fb32c-default-rtdb.firebaseio.com/${data}.json`
    );

    const res = await req.json();

    let count = 0,
      j = 0;
    // countarray = [];
    for (let i in res) {
      count++;
      countarray.push(res[i]);
    }
    // console.log(countarray.length);
    const random = uniqueRandom(1, count);

    for (let i = 0; i < countarray.length; i++) {
      let uniqueID = random();
      if (j === 3) {
        return;
      } else {
        j++;

        recipeData.push(countarray[uniqueID]);
        setRescipeDetail(countarray[uniqueID]);
      }
    }
    // console.log(recipeData);
  };

  return (
    <div className='App'>
      <Header onRecipeList={recipeListHandler} />
      {!welcome && <Welcome />}
      {welcome && <Body sendRecipe={recipeData} />}
      {/* <Body sendRecipe={recipeData} /> */}
    </div>
  );
}

export default App;
