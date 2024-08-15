import React, { useEffect, useRef, useState } from 'react'

function DemoUseRef() {
    const focusRef = useRef()
    let countRef = useRef(0)
    let [count, setCount] = useState(0)


    const handleIncreaseRefValue = () => {
        countRef.current += 1
    }

    const handleIncreaseState = () => {
        setCount((prev) => prev = prev + 1)
    }

    const printRefValue = () => {
        console.log("CountRef:", countRef.current)
    }

    console.log("CountRef:", countRef.current, "Count:", count);


    useEffect(() => {
        if (focusRef && focusRef.current) {
            focusRef.current.focus()
        }
    }, [])

    return (
        <>
            <input type="text" placeholder='Nhập vào username' ref={focusRef} />
            <input type="password" placeholder='Nhập vào password' />

            <p>Số lần click Count là: {count}</p>
            <p>Số lần click CountRef là: {countRef.current}</p>
            <button onClick={handleIncreaseState}>Tăng cho state</button>

            <button onClick={handleIncreaseRefValue}>Tăng cho Ref</button>

            <button onClick={printRefValue}>In ra giá trị ref hiện tại</button>
        </>
    )
}

export { DemoUseRef }