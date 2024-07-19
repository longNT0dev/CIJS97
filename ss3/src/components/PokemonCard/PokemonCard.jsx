import React from 'react'
import "./PokemonCard.css"
import AttributeCard from './AttributeCard/AttributeCard'

function PokemonCard({ stt, name, pokemonUrl, attributes = [], handleClick }) {

    // const handleAlertForChild = () => {
    //     alert(`
    //         STT: ${stt}
    //         Name: ${name}
    //         Attributes: ${attributes.join(",")}
    //     `)
    // }

    return (
        <div className="card" onClick={handleClick}>
            <div className="avatar">
                <img width="175" height="175" src={pokemonUrl} alt="" />
            </div>

            <div className="information">
                <h5>{stt}</h5>

                <h2>{name}</h2>
            </div>

            <div className="attributes">
                {
                    attributes.includes("Fire") && <AttributeCard backgroundColor="red" name="Fire"></AttributeCard>
                }

                {
                    attributes.includes("Glass") && <AttributeCard backgroundColor="green" name="Glass"></AttributeCard>
                }

                {
                    attributes.includes("Poison") && <AttributeCard backgroundColor="purple" name="Poison"></AttributeCard>
                }

                {
                    attributes.includes("Water") && <AttributeCard backgroundColor="blue" name="Water"></AttributeCard>
                }

                {
                    attributes.includes("Bug") && <AttributeCard backgroundColor="#007f00" name="Bug"></AttributeCard>
                }

                {
                    attributes.includes("Flying") && <AttributeCard backgroundColor="grey" name="Flying"></AttributeCard>
                }


            </div>
        </div>
    )
}

export default PokemonCard

// Alert:
/*
STT:
TenPokemon: 
Thuoc tinh: thuoctinh1, thuoctinh2,...
*/