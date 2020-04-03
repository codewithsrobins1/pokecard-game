import React, {Component} from 'react'; //standard practice
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' //link to get fancy pokemon images
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

//Function to Pass 3 numbers to pull pokemon image
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
// Example: if 2, 002 then slice whole thing
// Example: if 23, 0023 then slice back three 0023 -> 023

class Pokecard extends Component{
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`; //grab image of pokemon based on ID
        const { name, type, exp } = this.props;
        return (
            <div className='Pokecard'>
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={name} />
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        )
    }
}

export default Pokecard;

//Props are from Pokedex.js