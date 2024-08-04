import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';
import pokemonUrl1 from "./images/001.png"
import { AuthContext } from './components/ContextExample/ContextExample';
import Header from './components/Header/Header';
import { ThemeContext } from './contexts/ThemeContext';
import Footer from './components/Footer/Footer';
import Clock from './components/Clock/Clock';
import { Outlet } from 'react-router-dom';

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

  const [currentUser, setCurrentUser] = useState({
    username: "Nguyen Thanh Long",
    avatar: "",
    isLoggedIn: false,
  })

  const [colorButton, setColorButton] = useState("white")

  return (
    // Fragment: Không sinh thẻ trong cây DOM
    <>
      {/* <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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


     

      <button onClick={submit}>Submit</button>
      </div> */}

      <ThemeContext.Provider value={{ colorButton, setColorButton }}>
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
          <Header></Header>

          {/* <Clock></Clock> */}
          <main>
            {/* Render ra trang nào đó */}
            <Outlet></Outlet>
          </main>

          <Footer></Footer>
          {/* Tất cả component nằm bên trong đều dùng được context này  */}
        </AuthContext.Provider>
      </ThemeContext.Provider>

    </>


  );
}

export default App;


/*
Bài tập: 
1. Tạo 1 button dạng bật/tắt cho phép đổi màu từ trắng (white) sang màu xám (grey) (button được đặt trong component Header bên dưới) 
2. Tạo ra ThemeContext để lưu trữ màu khi người dùng bật/tắt
3. Tạo ra 3 component Header, Main, Footer sử dụng ThemeContext để hiển thị màu sắc backgroundColor biết các màu này phụ thuộc vào màu lưu trong ThemeContext nhưng với opacity khác nhau lần lượt là 0.7 - 0.8 - 0.9

4. Làm đồng hồ đếm giờ để đếm ngược từ 60s về 0. Khi đồng hồ về 0 sẽ hiển thị alert("Đã hết giờ làm bài"). Lưu ý sử dụng useEffect và setInterval cho bài này 

*/