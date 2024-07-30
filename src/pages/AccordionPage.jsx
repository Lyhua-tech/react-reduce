import React from 'react'
import Accordion from '../components/Accordion'

const AccordionPage = () => {
    const items = [
        {
            'id': "19282",
            'label': "can i use material ui for a project ?",
            'content': "you can not use material ui but can use daisyUI instead."
        },
        {
            'id': "1928ahd",
            'label': "can i use nextjs for a project ?",
            'content': "you can not use nextjs but you can use reactjs ."
        },
        {
            'id': "19dhadk",
            'label': "can i use mysql for a project ?",
            'content': "of course you have to use mysql for your project."
        },
    ]
    return (
        <Accordion items={items} />
    )
}

export default AccordionPage