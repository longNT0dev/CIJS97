import React from 'react'
import useTheme from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';


function Header() {
    const { colorButton, setColorButton } = useTheme()

    const ChangeBackgroundColorButton = () => {
        setColorButton(prev => prev === "white" ? "grey" : "white")
    };

    return (
        <div>
            {/* <button onClick={ChangeBackgroundColorButton} style={{ backgroundColor: colorButton, opacity: '0.7' }}><p style={{ color: "red" }}>Click me</p></button> */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header