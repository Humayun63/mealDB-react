import React, { useEffect, useState } from 'react';
import { addToDB, getFromDB } from '../../utilities/localstorage';
import Cards from '../Cards/Cards';
import SideBar from '../SideBar/SideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [foodNames , setFoodNames] = useState([]);
    useEffect(()=>{
        setFoodNames(getFromDB)
    }, [])
    const handleOrder = (name) => {
        let newNames;

        !foodNames.includes(name) ?
        (newNames = [...foodNames, name]) : 
        (newNames = [...foodNames]) && toast("Already Ordered!");

        setFoodNames(newNames);
        addToDB(name);
    }
    const handleClearBtn = () =>{
        localStorage.clear();
        setFoodNames([]);
    }
    return (
        <>
        <ToastContainer />
            <div className="row m-4 mt-5 ">
                <div className="col-9 pe-5">
                    <Cards handleOrder={handleOrder} />
                </div>
                <div className="col-3">
                    <SideBar foodNames={foodNames} handleClearBtn={handleClearBtn}/>
                </div>
            </div>
        </>
    );
};

export default Main;