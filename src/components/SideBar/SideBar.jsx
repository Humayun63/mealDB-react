import React, { useEffect, useMemo, useState } from 'react';

const SideBar = ({foodNames, handleClearBtn}) => {
    return (
        <div className='bg-dark text-light p-2 rounded pb-4'>
            <h3 className='mb-4 text-center'>Selected Items</h3>
            {foodNames.map(foodName => <li className='ms-3 mb-2' key={foodName}>{foodName}</li>)}
            {
                localStorage.getItem('food-names') && 
                <button onClick={handleClearBtn} className="btn btn-secondary mt-4 d-block mx-auto">Clear List</button>
            }
        </div>
    );
};

export default SideBar;