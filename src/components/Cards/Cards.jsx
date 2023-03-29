import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = ({handleOrder}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setData(data.meals))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map(card => <SingleCard 
                card={card}
                key={card.idMeal}
                handleOrder= {handleOrder}
                />)}
        </div>
    );
};

export default Cards;