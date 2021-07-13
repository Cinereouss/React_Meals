import { useState } from "react";

import { getMeals } from "./apis";
import { Container, Grid } from "@material-ui/core";
import SearchFood from "./components/SearchFood/SearchFood";
import FoodItem from "./components/FoodItem/FoodItem";

import "./App.css";

function App() {
  const [Meals, setMeals] = useState([]);

  const handldOnKeyUp = (e) => {
    if (e.keyCode === 13) {
      getMeals(e.target.value).then((res) => {
        setMeals(res.data.meals);
      });
    }
  };

  return (
    <div className="App">
      <Container>
        <div className="meal-wrapper">
          <div className="meal-search">
            <h2 className="title">Find Meals For Your Ingredients</h2>
            <blockquote>
              Real food doesn't have ingredients, real food is ingredients.
            </blockquote>
            <cite>- Jamie Oliver</cite>
            <SearchFood handldOnKeyUp={handldOnKeyUp} />
          </div>
          <div className="meal-result">
            <h2 className="title">Your Search Results:</h2>
            <div className="meal">
              <Grid container spacing={2}>
                {Meals && Meals.map((item, index) => (
                  <FoodItem key={index} data={item} />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
