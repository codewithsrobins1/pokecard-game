import React, {Component} from 'react'; //standard practice
import Pokedex from './Pokedex'
import './Pokegame.css'

class Pokegame extends Component{
    static defaultProps = { //Default props if none specified
        pokemon : [
         {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
         {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
         {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
         {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
         {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
         {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
         {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
         {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
       ] 
     };
    render(){
        //Create 2 Hands for the Game
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while(hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length); //gives random index inside this.props.pokemon
            let randPokemon = hand2.splice(randIdx, 1)[0]; //<-- grab the first index from the newly created one made from splice 
            hand1.push(randPokemon); //Remove from hand2 and push into hand 1- repeat over 
        }

        //Calculate the experience
        //Reduce takes Two Arguments - a callback function and initial value for the accumulator
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return(
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}

export default Pokegame;