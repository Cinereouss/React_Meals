import axios from "axios";

export const getMeals = (ketword) =>{
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ketword}`);
}

export const getMealRecipe = async (id) => {
  return axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
};