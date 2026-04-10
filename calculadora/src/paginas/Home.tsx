import { Component } from 'react';
import { Link } from 'react-router-dom';
import "../estilos/estilos.css";

class Home extends Component {
    constructor(props: any){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Home</h1>
            <Link to="/contato"><button>Contato</button></Link> <br/>
            <Link to="/sobre"><button>Sobre</button></Link> 
        </div>
      )
    }
}

export default Home;