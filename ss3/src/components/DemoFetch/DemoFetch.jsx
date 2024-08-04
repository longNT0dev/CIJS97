import React, { useEffect, useState } from 'react'
import testJson from "./test.json"
function DemoFetch() {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // async/await => ES6 (Phiên bản mới)
    const fetchPokemon = async () => {
        try {
            setIsLoading(true)
            // asynchronous: Bất đồng bộ => Code viết trước lại chạy sau 
            // REST API: 
            // POST: Dùng để gửi dữ liệu đi (dùng để thêm mới) -> lưu trữ dữ liệu trên BE => C
            // GET: Dùng để lấy dữ liệu về (cache) => R
            // PUT, PATCH: Dùng để gửi dữ liệu đi (dùng để cập nhật) => U
            // DELETE: Dùng để xóa => D
            const res = await fetch("https://pokeapi.co/api/v2/pokemon")
            const data = await res.json()
            console.log("Đây là dữ liệu của pokemon", data)

            setPokemons(data.results)

            setTimeout(() => setIsLoading(false), 5000)
           
        } catch (error) {
            console.log("Có lỗi xảy ra", error)
            setIsLoading(false)

            // Hiển thị alert, popup lỗi ....
        }

    }

    const fetchPokemonWithThen = () => {
        // asynchronous: Bất đồng bộ => Code viết trước lại chạy sau 
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(data => {
                console.log("Đây là dữ liệu của pokemon", data)
            })
            .catch(err => {
                console.log("Có lỗi xảy ra", err)
            })
    }

    useEffect(() => {
        fetchPokemon()
    }, [])



    return (
        <>
            {isLoading && <h1>Loading....</h1>}
            <button onClick={fetchPokemon}>Bấm để lấy ra danh sách tất cả pokemon</button>

            {
                pokemons.map((pokemon, index) => (
                    <p key={`pokemon-${index}`}>{pokemon.name}</p>
                ))
            }
        </>


    )
}

export default DemoFetch