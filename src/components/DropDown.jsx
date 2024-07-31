import {React, useState, useEffect, useRef} from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

const DropDown = ({ options, onSelect, select}) => {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef();
    const handleOpen = () => {
        setIsOpen((currentOpen) => !currentOpen);
    }

    const handleSelect = (option) => {
        setIsOpen(!isOpen);
        onSelect(option);
    }

    useEffect(() => {
        const handler = (event) => {
            if (!divRef.current) {
                return;
            }
            if (!divRef.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

    const renderOptions = options.map((option) => {
        return (
            <div 
            className='hover:bg-sky-100 rounded cursor-pointer p-1'
            onClick={() => handleSelect(option)} 
            key={option.value}
            >
                {option.label}
            </div>
        )
    })
    /*
        this two line of codes gives the same output, however the second one can use to
        to prevent the error when the variable is null or undefine. Thus 2nd option is more
        like to be correct.
    */
    // let result = !select ? 'Select...' : select.label
    let result = select?.label || 'Select...'

    return (
        <div ref={divRef} className='w-48 relative'>
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleOpen}>
                {result}
                <GoChevronDown className='text-xl'/>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderOptions}</Panel>}
        </div>
    )
}

export default DropDown