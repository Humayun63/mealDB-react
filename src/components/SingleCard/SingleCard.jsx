import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseball } from '@fortawesome/free-solid-svg-icons'


const SingleCard = ({card, handleOrder}) => {
    const {strMealThumb, strMeal, strInstructions} = card;
    return (
        <div className='col'>
            <div className="card h-100">
                <img src={strMealThumb} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strInstructions.slice(0, 200)}</p>
                </div>
                <div className="card-footer p-0">
                    <button className='btn btn-primary rounded-0 w-100' onClick={()=>{handleOrder(strMeal)}}>
                        <span>Order Me </span>
                        <FontAwesomeIcon icon={faBaseball} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;