import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {

    return (

        <div className = {style.recipe}> 

            <h1>{title}</h1>
            <ol type = "I">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{Math.floor(calories) / 1000} Kcal</p>
            <img className = {style.image} src = {image} alt = ""></img>

        </div>

    );

}

export default Recipe;