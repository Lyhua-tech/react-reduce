import {React, useState, useEffect} from 'react';

const useCount = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    
    useEffect(() => {
        console.log(count);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }
    return {
        count,
        increment : handleClick
    }
}

export default useCount;