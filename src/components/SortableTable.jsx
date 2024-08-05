import Table from './Table'; 
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from '../hooks/use-sort';

const SortableTable = (props) => { 
    const { config, data } = props;  
    const {sortData,sortOrder,sortBy,handleClick } = useSort(config, data)

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