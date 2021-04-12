import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text
                    .replace(/cup/gi, 'чашки')
                    .replace(/grams/gi, 'грамм')
                    .replace(/oil/gi, 'масла')
                    .replace(/olive/gi, 'оливкового')
                    .replace(/white/gi, 'белого')
                    .replace(/wine/gi, 'вина')
                    .replace(/cloves/gi, 'гвоздика')
                    .replace(/garlic/gi, 'чеснок')
                    .replace(/peeled/gi, 'очищенных')
                    .replace(/large/gi, 'больших')
                    .replace(/russet/gi, 'красновато-коричневых')
                    .replace(/potatoes/gi, 'картофели')
                    .replace(/and/gi, 'и')
                    .replace(/cut/gi, 'нарезать')
                    .replace(/into/gi, 'в')
                    .replace(/chunks/gi, 'кусочки')
                    .replace(/chicken/gi, 'курицы')
                    .replace(/pieces/gi, 'штук')
                    .replace(/or/gi, 'или')
                    .replace(/pound/gi, 'фунт')
                    .replace(/stock/gi, 'бульона')
                    .replace(/legs/gi, 'ножек')
                    .replace(/tablespoon/gi, 'столовые ложки')
                    .replace(/chopped/gi, 'нарезанных')
                    .replace(/parsley/gi, 'петрушек')
                    .replace(/Salt/gi, 'соли')
                    .replace(/pepper/gi, 'перца')
                    .replace(/frozen/gi, 'замороженных')
                    .replace(/peas/gi, 'гороха')
                    .replace(/thawed/gi, 'размороженных')
                    .replace(/ g /gi, ' гр. ')
                    .replace(/bread/gi, 'хлебной')
                    .replace(/flour/gi, 'муки')
                    .replace(/tsp/gi, 'чайной ложки')
                    .replace(/Sugar/gi, 'сахара')
                    .replace(/plus/gi, 'плюс')
                    .replace(/pinch/gi, 'щепотки')
                    .replace(/water/gi, 'воды')
                    .replace(/room/gi, 'комнатной')
                    .replace(/temperature/gi, 'температуры')
                    .replace(/at/gi, 'в')
                }</li>
                <li className="ingredient-weight">Масса - {ingredient.weight}</li>
            </ul>
        );
    });
};

export default RecipeDetails;