import React from 'react';
import './Food.css';

const Food = (props) => {
    const { food } = props;
    return (
        <div className="single-food">
            <div className="food">
                <img src={food.strMealThumb} alt="" />
                <h3>{food.strMeal}</h3>
            </div>
        </div>
    );
};

export default Food;