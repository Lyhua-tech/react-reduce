import React from 'react';
import SortableTable from '../components/SortableTable';

const TablePage = () => {
    const data = [
        {name:'orange', color:'bg-orange-500', score:5},
        {name:'lime', color:'bg-green-500', score:6},
        {name:'apple', color:'bg-red-500', score:9},
        {name:'berry', color:'bg-blue-500', score:8},
        {name:'grape', color:'bg-purple-500', score:2},
    ]
    const config = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`size-6 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
    ]
    const keyFn = (fruit) => {
        return fruit.name
    }
    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage