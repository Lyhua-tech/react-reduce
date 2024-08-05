import {React} from 'react';
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

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
                <Route path='/Modal'>
                    <ModalPage />
                </Route>
                <Route path='/Table'>
                    <TablePage />
                </Route>
                <Route path='/Counter'>
                    <CounterPage initialCount={10}/>
                </Route>
            </div>
        </div>
    )
}

export default App