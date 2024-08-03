import React, { useState } from 'react'
import Table from './Table'

const SortableTable = (props) => {
    const { config, data } = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const handleClick = (label) => {
        if (sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    }
    let sortData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find(column => {
            column.label === sortBy
        })
        sortData = [...fruits].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseSort = sortOrder === 'asc' ? 1 : -1;

            if (typeof(valueA) === 'string') {
                return valueA.localeCompare(valueB) * reverseSort;
            }else{
                return (valueA - valueB) * reverseSort
            }
        })
    }

    const rerenderConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: (x) =>( 
                <th className='bg-red-500 text-white' key={x} onClick={() => {handleClick(column.label)}}>
                    {column.label}
                </th>
            )
        }
    })
    return (
        <div>
            {sortOrder} - {sortBy}
            <Table {...props} config={rerenderConfig} data={sortData}/>
        </div>
    )
}

export default SortableTable