import {React, useState} from 'react';
import DropDown from '../components/DropDown';


const DropDownPage = () => {
    const [select, setSelect] = useState(null);

    const handleSelect = (option) => {
        setSelect(option);
    }
    
    const colors = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'Green'},
        {label: 'Blue', value: 'blue'},
    ]

    return <div className='flex'>
        <DropDown options={colors} onSelect={handleSelect} select={select} />
    </div>
}

export default DropDownPage