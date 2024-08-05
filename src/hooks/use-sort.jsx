import React, { useState } from 'react';  
const useSort = (config, data) => {
    const [sortOrder, setSortOrder] = useState(null);  
    const [sortBy, setSortBy] = useState(null);  

    const handleClick = (label) => {  
        if (label && sortBy !== sortBy) {
            sortOrder('asc');
            sortBy(label);
            return;
        }

        if (sortOrder === null) {  
            setSortOrder('asc');  
            setSortBy(label);  
        } else if (sortOrder === 'asc') {  
            setSortOrder('desc');  
            setSortBy(label);  
        } else if (sortOrder === 'desc') {  
            setSortOrder(null);  
            setSortBy(null);  
        }  
    }
    let sortData = data;  
    if (sortBy && sortOrder) {  
        const { sortValue } = config.find(column => column.label === sortBy);  
        sortData = [...data].sort((a, b) => {  
            const valueA = sortValue(a);  
            const valueB = sortValue(b);  
            const reverseSort = sortOrder === 'asc' ? 1 : -1;  

            if (typeof(valueA) === 'string') {  
                return valueA.localeCompare(valueB) * reverseSort;  
            } else {  
                return (valueA - valueB) * reverseSort;  
            }  
        });  
    }  
    return {
        sortData,
        sortOrder,
        sortBy,
        handleClick,
    }
}

export default useSort;