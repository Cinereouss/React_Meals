import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./MealReceipeModal.css";

const MealRecipeModal = ({ showModal, openModal, recipe }) => {
  console.log(recipe)
  return (
    <>
      {showModal ? (
        <div className="meal-details showRecipe">
          <button
            type="button"
            className="btn recipe-close-btn"
            id="recipe-close-btn"
            onClick={openModal}
          >
            <CloseIcon />
          </button>

          <div className="meal-details-content">
            <h2 className="recipe-title">{recipe[0].strMeal}</h2>
            <p className="recipe-category">{recipe[0].strCategory}</p>
            <div className="recipe-instruct">
              <h3>Instructions:</h3>
              <p>
                {recipe[0].strInstructions}
              </p>
            </div>
            <div className="recipe-meal-img">
              <img src={recipe[0].strMealThumb} alt="" />
            </div>
            <div className="recipe-link">
              <a href={recipe[0].strYoutube}>Watch Video</a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MealRecipeModal;
