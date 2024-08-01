import React from 'react'
import Link from './Link'

const Sidebar = () => {
    const link = [
        {label: 'Dropdown', to:'/'},
        {label: 'Accordion', to:'/Accordion'},
        {label: 'Buttons', to:'/Buttons'},
        {label: 'Modal', to:'/Modal'},
    ]
    const renderLink = link.map((link) => {
        return <Link to={link.to} key={link.label} activeClass="font-bold border-l-4 border-blue-400 pl-2" >{link.label}</Link>
    })
    return (
        <div className=''>
            {renderLink}
        </div>
    )
}

export default Sidebar