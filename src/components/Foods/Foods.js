import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    setTimeout(() => {
        document.getElementById('searchButton').addEventListener('click', getFoods)
    }, 1);

    const [foods, setFoods] = useState({});
    useEffect(getFoods, []);

    function getFoods() {
        // set status as loading
        setFoods({ meals: 'Loading' });

        const searched = document.getElementById('searchField').value;
        if (searched === '') { setFoods({}); return };
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searched;
        fetch(url).then(r => r.json()).then(d => setFoods(d));
    }

    if (foods.meals === 'Loading') {
        return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    }
    else if (foods.meals === undefined) {
        return <h1 style={{ textAlign: 'center' }}>No Input.!</h1>
    }
    else if (foods.meals === null) {
        return <h1 style={{ textAlign: 'center' }}>Nothing found...</h1>
    }
    else {
        const { meals } = foods;
        return (
            <div className="foodContainer">
                {
                    meals.map(food => <Food food={food} key={food.idMeal}></Food>)
                }
            </div>
        );
    }
};


export default Foods;