import { Component } from 'react';
import { Link } from 'react-router-dom';
import "../estilos/estilos.css";

class NotFound extends Component {
    constructor(props: any){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>NotFound - 404</h1>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default NotFound;