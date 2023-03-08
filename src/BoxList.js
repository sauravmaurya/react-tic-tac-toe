import React from 'react'
import Box from './Box'

function BoxList({ boxes, onChange, msg }) {
    const renderedBoxes = boxes.map((item, index) => {
        return <Box id={index} key={index} onChange={onChange}>{item}</Box>
    })

    return (
        <div className={(msg === "O Won" || msg === "X Won") ? "boxes won" : "boxes"}>{renderedBoxes}</div>
    )
}

export default BoxList
