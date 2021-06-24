import React, { useState,useEffect } from "react";
import GetCard from "./GetCard";
import classes from "./GetRecipe.module.css";
import uniqueRandom from 'unique-random';

let countarray=[];
let recipeData = [];

const GetRecipe = props => {
  const [rescipeDetail, setRescipeDetail] = useState([]);

  const fetchHandler = async () => {
    const req = await fetch(
      `https://forkify-fb32c-default-rtdb.firebaseio.com/${props.jsonName}.json`);

    const res = await req.json();
    let j = 0,count=0;
    for (let i in res) {
      count++;
      countarray.push(res[i]);
    }
    // console.log(countarray);
    recipeData = [];
    const random = uniqueRandom(1, count);
    
    // uniqueID.push(random());
    for(let i=0;i<countarray.length;i++){
      let uniqueID= random();
      // console.log(countarray[i]);
      if (j === 3) {
        return;
      } 
      else 
      {
        j++;
        recipeData.push(countarray[uniqueID]);
        setRescipeDetail(countarray[uniqueID]);
      }
    }
    
  };
  // console.log(recipeData);

  useEffect(() => {
    fetchHandler();
  }, []);

  const recipeList = recipeData.map(data => {
    return (
      <GetCard
        key={data.id}
        id={data.id}
        title={data.title}
        image={data.image_url}
        publisher={data.publisher}
        source={data.source_url}
      />
    );
  });

  return (
    <div className='container'>
      <button className={classes.button} >
       {/* onClick={fetchHandler}> */}
        Get Recipe
      </button>
      {recipeList !== [] ? <h2>{recipeList}</h2> : "No Meals Found..!"}
    </div>
  );
};

export default GetRecipe;
