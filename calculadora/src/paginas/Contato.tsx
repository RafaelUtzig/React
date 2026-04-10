import { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

class Contato extends Component {
    constructor(props: any){
      super(props);
    }

    render(){
      return(
        <div className="page-container">
            <h1>Contato</h1>
            {/* Adicione os dados exigidos pela atividade aqui: */}
            <p>Nome: Seu Nome</p>
            <p>E-mail: seuemail@pucpr.br</p>

            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Contato;