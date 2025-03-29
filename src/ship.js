const Ship = (length) => {
    let hits = 0;
    
    const hit = () => hits++;
    const isSunk = () => hits >= length;
    const getHits = () => hits;
    
    return { length, hit, isSunk, getHits }; 
};

export default Ship;