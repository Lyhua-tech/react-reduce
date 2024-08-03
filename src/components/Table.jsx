import React from 'react';

const Table = ({ data, config, keyFn }) => {
    const renderHead = config.map((column) => {
        if (column.header){
            return column.header(column.label);
        }
        return <th key={column.label}>{column.label}</th>
    })
    const renderItems = data.map(rowData => {
        const renderCell = config.map(cell => {
            return (
                <td key={cell.label} className='p-3'>{cell.render(rowData)}</td>
            )
        })
        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {renderCell}
            </tr>
        )
    })
    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderHead}
                </tr>
            </thead>
            <tbody>
                {renderItems}
            </tbody>
        </table>
    )
}

export default Table