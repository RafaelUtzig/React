import { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.css";

class Sobre extends Component {
    constructor(props: any){
      super(props);
    }

    render(){
      return(
        <div className="page-container">
            <h1>Sobre</h1>
            {/* Adicione os dados exigidos pela atividade aqui: */}
            <p>Linguagem: React, TypeScript, HTML e CSS</p>
            
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Sobre;