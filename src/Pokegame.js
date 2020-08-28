import React from 'react';
import {Component} from 'react';
import Pokedex from './Pokedex';



class Pokegame extends React.Component{

    static defaultProps = {
        pokemons : [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
         {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
         {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
         {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
         {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
         {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
         {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
         {id: 133, name: 'Eevee', type: 'normal', base_experience: 65} ]
       };


          constructor(props){
              super(props);

              this.pokemon1 = this.props.pokemons.slice(0,(this.props.pokemons.length/2));
              this.pokemon2 = this.props.pokemons.slice((this.props.pokemons.length/2),(this.props.pokemons.length));
              console.log(this.pokemon1);

              console.log(this.pokemon2);


          }




    

render(){
    let pokem1 = [];
    let pokem2 = [...this.props.pokemons];
    while(pokem1.length < pokem2.length){

        let poke = pokem2.splice(Math.floor(Math.random()*pokem2.length),1)[0]  ;
        pokem1.push(poke);
    }

    console.log(pokem1);
    console.log(pokem2);
    let exp1 = pokem1.reduce((exp, pokemon) =>  exp + pokemon.base_experience,0);
    let exp2 = pokem2.reduce((exp, pokemon) =>  exp + pokemon.base_experience,0);

    
return(




<div align="centre">
<div align="centre">
<Pokedex pokemons = {pokem1}  exp={exp1} isWinner={exp1>exp2}/></div>
<div align="centre">
<Pokedex pokemons = {pokem2} exp={exp2} isWinner={exp2>exp1}/>
</div>
</div>


);

}

};


export default Pokegame;