import React from 'react'
import useTheme from '../../contexts/ThemeContext';


function Header() {
    const { colorButton, setColorButton } = useTheme()

    const ChangeBackgroundColorButton = () => {
        setColorButton(prev => prev === "white" ? "grey" : "white")
    };

    return (
        <div>
            <button onClick={ChangeBackgroundColorButton} style={{ backgroundColor: colorButton, opacity: '0.7' }}><p style={{ color: "red" }}>Click me</p></button>
        </div>
    )
}

export default Header