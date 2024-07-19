import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';
import pokemonUrl1 from "./images/001.png"

function App() {
  // Thực hiện logic xử lý 
  // const pi = Math.PI

  // const printSomething = () => {
  //   console.log("Hello world!");
  // }

  // const newObj = {
  //   school: "mindX"
  // }

  // let count = 0

  // const [count, setCount] = useState(0)
  // const [userInfo, setUserInfo] = useState({
  //   name: "Long",
  //   age: 60
  // })

 

  // const increaseCount = () => {
  //   // setState -> Hàm bất đồng bộ 
  //   setCount((prevCount) => prevCount + 1)
  //   setCount((prevCount) => {
  //     return prevCount + 1
  //   })

  //   // console.log(count)
  // }

  // const updateInfo = () => {
  //   const newObj = {
  //     ...userInfo,
  //     name: "New name"
  //   }

  //   setUserInfo(newObj)
  // }
  let [text, setText] = useState("")

  const handleChange = (event) => {
    const newValue = event.target.value
    
    console.log(newValue);

    setText(newValue)
  }

  // const submit = () => {
  //   if (!text) {
  //     alert("Thông tin nhập vào không được để trống")
  //   }
  // }

  // HOOK: Đơn giản là 1 hàm thực hiện 1 chức năng được tạo sẵn 
  const [pokemons, setPokemon] = useState([
    {
      stt: "Thay đổi thành cái gì đó!!",
      name: "Bullbasource",
      attributes: ["Fire", "Bug"],
      avatar: pokemonUrl1
    },

    {
      stt: "0002",
      name: "Bullbasougfg",
      attributes: ["Fire", "Bug"],
      avatar: pokemonUrl1
    },
  ])

  const handleAlert = (index) => {
    alert(`
      STT: ${index + 1}
      Name: ${pokemons[index].name}
      Attributes: ${pokemons[index].attributes.join(",")}
    `)
  }

  return (
    // Fragment: Không sinh thẻ trong cây DOM
    <>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <PokemonCard stt={pokemons[0].stt} name={pokemons[0].name} pokemonUrl={pokemons[0].avatar} attributes={["Fire", "Bug"]} handleClick={() => handleAlert(0)}></PokemonCard>

        <PokemonCard stt={pokemons[1].stt} name={pokemons[1].name} pokemonUrl={pokemons[1].avatar} attributes={["Fire", "Bug"]} handleClick={() => handleAlert(0)}></PokemonCard>

        <input type="text" onChange={handleChange} />
        <p>{text}</p>


        {/* <PokemonCard stt="0002" name="Pikachu" pokemonUrl={pokemonUrl1} attributes={["Water"]}></PokemonCard>
      <PokemonCard stt="0003" name="Chameleon" pokemonUrl={pokemonUrl1} attributes={["Flying", "Bug"]}></PokemonCard>
      <PokemonCard stt="0004" name="Wartortle" pokemonUrl={pokemonUrl1}></PokemonCard> */}
        {/* <p>Giá trị của biến count là {count}</p>
      <button onClick={increaseCount}>Bấm vào đây để tăng giá trị biến count lên 1</button>

      <button onClick={updateInfo}>Cập nhật tên</button>
      <h1>Tên của bạn là {userInfo.name}</h1>


     

      <button onClick={submit}>Submit</button> */}
      </div>
    </>


  );
}

export default App;


