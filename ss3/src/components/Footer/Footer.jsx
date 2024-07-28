import React from 'react'
import useTheme from '../../contexts/ThemeContext'

function Footer() {

    const { colorButton } = useTheme()

    return (
        <div style={{ backgroundColor: colorButton, opacity: '0.9' }}>Footer</div>
    )
}

export default Footer