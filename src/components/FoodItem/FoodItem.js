import React, { useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import MealRecipeModal from "../MealRecipeModal/MealRecipeModal";
import { getMealRecipe } from "../../apis/index";

import "./FoodItem.css";

const FoodItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getMealRecipe(data.idMeal).then((res) => {
      setRecipe(res.data.meals);
    });
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Grid item md={4}>
      <div className="meal-item">
        <div className="meal-img">
          <img src={data.strMealThumb} alt="food" />
        </div>
        <div className="meal-name">
          <h3>{data.strMeal}</h3>
          <button className="recipe-btn" onClick={openModal}>
            Get Recipe
          </button>
          {showModal && (
            <MealRecipeModal
              showModal={showModal}
              openModal={openModal}
              recipe={recipe}
            />
          )}
        </div>
      </div>
    </Grid>
  );
};

export default FoodItem;
