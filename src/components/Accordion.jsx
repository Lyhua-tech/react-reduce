import {React, useState} from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (nextIndex) => {
        setExpandedIndex( current => {
            if (current === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        })
    }
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>
        return (
            <div key={item.id}>
                <div className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                <p>{isExpanded && <div className='border-b p-5'>{item.content}</div>}</p>
            </div>
        )
    })
    return (
        <div className='border-x border-t rounded'>{renderedItems}</div>
    )
}

export default Accordion