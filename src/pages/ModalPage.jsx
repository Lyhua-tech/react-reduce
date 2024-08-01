import {React, useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Buttons';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }
    return (
        <div>
            <Button success onClick={handleClick}>Open Modal</Button>
            {showModal && <Modal />}
        </div>
    )
}

export default ModalPage