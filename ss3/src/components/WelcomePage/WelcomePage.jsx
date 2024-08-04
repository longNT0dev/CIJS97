import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import fileConfig from "../../../package.json"
function WelcomePage() {

    const {productId, userId} = useParams()
    console.log(productId);

    console.log(fileConfig.name);
    // fetch
    return (
        <div>WelcomePage:
            <h1>
                <Outlet></Outlet>

            </h1>

            <h2>
                <Outlet></Outlet>
            </h2>


        </div>
    )
}

export default WelcomePage