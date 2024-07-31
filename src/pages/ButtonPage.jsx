import React from 'react'
import Button from '../components/Buttons'

const ButtonPage = () => {
    const handleClick = () => {
        console.log('abc')
    }
    return (
    <div>
        <Button primary rounded onClick={handleClick}>
            Hello
        </Button>
        <Button secondary onClick={handleClick}>
            Hello
        </Button>
        <Button success outline onClick={handleClick}>
            Hello
        </Button>
        <Button warning onClick={handleClick}>
            Hello
        </Button>
        <Button danger onClick={handleClick}>
            Hello
        </Button>
    </div>
    )
}

export default ButtonPage