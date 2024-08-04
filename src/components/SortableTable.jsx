import React, { useState } from 'react';  
import Table from './Table'; 
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const SortableTable = (props) => {  
    const { config, data } = props;  
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

    const rerenderConfig = config.map((column) => {  
        if (!column.sortValue) {  
            return column;  
        }  
        return {  
            ...column,  
            header: () => (   
                <th className='bg-red-500 text-white' onClick={() => handleClick(column.label)} key={column.label}>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}     
                    </div> 
                </th>  
            )  
        };  
    });  

    return (  
        <div>  
            <Table {...props} config={rerenderConfig} data={sortData} />  
        </div>  
    );  
};

const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy){
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>;
    }
    else if (sortOrder === 'asc'){
        return <div>
            <GoTriangleUp />
        </div>;
    }
    else if (sortOrder === 'desc'){
        return <div>
            <GoTriangleDown />
        </div>;
    }
}

export default SortableTable;