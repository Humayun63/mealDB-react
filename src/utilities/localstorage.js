const addToDB = (name) =>{
    localStorage.getItem('food-names') ? 
    (
        localStorage.setItem('food-names', JSON.stringify([...JSON.parse(localStorage.getItem('food-names')), name]))
    ) : 
    (
        localStorage.setItem('food-names', JSON.stringify([name]))
    )
}
const getFromDB = () =>{
    let names = [];
    const storedNames = localStorage.getItem('food-names');
    if(storedNames){
        names = JSON.parse(storedNames);
    }
    return names;
}
export {
    addToDB,
    getFromDB
}