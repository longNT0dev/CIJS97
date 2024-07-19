import React from 'react'

function AttributeCard({ backgroundColor, name }) {
    return (
        <div style={{ width: "100px", height: "30px", backgroundColor: backgroundColor }}>{name}</div>
    )
}

export default AttributeCard