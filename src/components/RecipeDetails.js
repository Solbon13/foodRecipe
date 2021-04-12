import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text
                    .replace('cup', 'чашки')
                    .replace('grams', 'грамм')
                    .replace('oil', 'масла')
                    .replace('olive', 'оливкового')
                    .replace('white', 'белого')
                    .replace('wine', 'вина')
                    .replace('cloves', 'гвоздика')
                    .replace('garlic', 'чеснок')
                    .replace('peeled', 'очищенных')
                    .replace('large', 'больших')
                    .replace('russet', 'красновато-коричневых')
                    .replace('potatoes', 'картофели')
                }</li>
                <li className="ingredient-weight">Масса - {ingredient.weight}</li>
            </ul>
        );
    });
};

export default RecipeDetails;