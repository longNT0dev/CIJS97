import React from 'react'

const BASE_URL = 'https://66af35afb05db47acc594351.mockapi.io/'

function DemoCrudFetch() {

    // Demo cho đăng ký, đăng nhập, đổi mật khẩu
    const fetchData = async () => {
        try {
            const res = await fetch(`${BASE_URL}/users`)
            const data = await res.json()

            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }

    const create = async () => {
        try {
            await fetch(`${BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "admin",
                    password: "123456",
                    name: "Long"
                })
            })
        } catch (err) {
            console.log(err);
        }
    }

    const updateOne = async (id) => {
        try {
            await fetch(`${BASE_URL}/users/5`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "admin test",
                    password: "12",
                    name: "Long"
                })
            })
        } catch (err) {
            console.log(err);
        }
    }

    const deleteOne = async () => {
        try {
            await fetch(`${BASE_URL}/users/5`, {
                method: 'DELETE',
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <button onClick={fetchData}>GET dữ liệu</button>
            <button onClick={create}>POST tạo mới</button>
            <button onClick={updateOne}>PATCH cập nhật</button>
            <button onClick={deleteOne}>DELETE xóa</button>
        </>
    )
}

export default DemoCrudFetch