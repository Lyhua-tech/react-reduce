import { React, useContext } from 'react';
import NavigationContext from '../contexts/navigations';
import classnames from 'classnames';

const Link = ({ to , children, activeClass }) => {
    const { navigate, currentPath} = useContext(NavigationContext);
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to)
    }
    const finalClass = classnames('flex flex-col gap3 text-blue-400', currentPath === to && activeClass )
    return (
        <a onClick={handleClick} href={to} className={finalClass}>
            {children}
        </a>
    )
}

export default Link