import {React, useState} from 'react';
import DropDown from './components/DropDown';
// import DarkMode from './components/DarkMode';

const App = () => {
    const [select, setSelect] = useState(null);
    // const [darkMode, setDarkMode] = useState(0);

    const handleSelect = (option) => {
        setSelect(option);
    }
    // const handleChange = (color) => {
    //     setDarkMode(color)
    // }
    const colors = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'Green'},
        {label: 'Blue', value: 'blue'},
    ]
    return <div>
        <DropDown options={colors} onSelect={handleSelect} select={select} />
        {/* <DarkMode /> */}
    </div>
}

export default App