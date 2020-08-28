import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends React.Component{

render(){

    let classNm;
    if(this.props.isWinner){
        classNm="Pokedex-winner";
    }
    else{
        classNm="Pokedex-loser";
    }



    console.log('In pokedex');
return(<div className="Pokedex">
    <div className={classNm}>{this.props.isWinner? "Winner" : "Loser"}    Total EXP: {this.props.exp}</div>
  
<div className="Pokedex-cards">{this.props.pokemons.map(pokemon => <Pokecard pokemon={pokemon} />)}</div>;
</div>)
}
}
export default Pokedex;

