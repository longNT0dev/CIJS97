import React, { useEffect, useState } from 'react'

function Clock() {
    const [timer, setTimer] = useState(5)

    useEffect(() => {
        // let counter = setInterval(() => {
        //     // Code logic

        //     if (timer > 0) {
        //         setTimer((prev) => prev = prev - 1)
        //     } else if (timer == 0) {

        //         clearInterval(counter)

        //         alert("Đã hết thời gian đếm ngược")
        //     }
        // }, 1000)

        setTimeout(() => {
            if (timer > 0) {
                setTimer((prev) => prev = prev - 1)
            } else if (timer == 0) {
                alert("Đã hết thời gian đếm ngược")
            }
        }, 1000)

        // Khi chạm tới 0 => Xóa interval
    }, [timer])

    return (
        <div>{timer}</div>
    )
}

export default Clock