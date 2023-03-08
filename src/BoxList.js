import React from 'react'
import Box from './Box'

function BoxList({ boxes, onChange }) {
    const renderedBoxes = boxes.map((item, index) => {
        return <Box id={index} key={index} onChange={onChange}>{item}</Box>
    })

    return (
        <div className='boxes'>{renderedBoxes}</div>
    )
}

export default BoxList
