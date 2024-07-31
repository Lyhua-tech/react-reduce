import {React} from 'react';
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';

const App = () => {
    
    return (
        <div className='container grid grid-cols-6 gap-6 mx-auto mt-4'>
            <Sidebar />
            <div className='col-span-5'>
                <Route path='/Accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/'>
                    <DropDownPage />
                </Route>
                <Route path='/Buttons'>
                    <ButtonPage />
                </Route>
            </div>
        </div>
    )
}

export default App