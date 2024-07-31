import { React, useContext } from 'react';
import NavigationContext from '../contexts/navigations';

const Route = ({ path, children }) => {
    const { currentPath } = useContext(NavigationContext);

    if (path === currentPath){
        return children;
    }
    return null;
}

export default Route