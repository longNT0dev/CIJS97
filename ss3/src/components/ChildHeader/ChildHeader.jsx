import React, { useContext } from 'react'
import useAuth from '../ContextExample/ContextExample'

function ChildHeader() {

    const { currentUser, setCurrentUser } = useAuth()

    return (
        <div>Cháu vẫn dùng được dữ liệu nef~ {currentUser.username}</div>
    )
}

export default ChildHeader