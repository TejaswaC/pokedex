import React, {
    Component
}
from 'react';

import {numberPadding} from './helper';
import './Pokecard.css';


class Pokecard extends Component {

    
   constructor(props){
       super(props);
       this.id = numberPadding(this.props.pokemon.id);
   }
   
    render() {


       

       return( <
        div className="Pokecard" align="centre">

        <img src = {`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.id}.png`}   />
            <
            h1 className="Pokecard-id"> ID: {this.props.pokemon.id}< /h1>     <
        h2 className="Pokecard-name"> Name:{this.props.pokemon.name} < /h2>
         <
        h3 className="Pokecard-data"> Type:{this.props.pokemon.type} < /h3>    < /
            div >)

    }




}

export default Pokecard;