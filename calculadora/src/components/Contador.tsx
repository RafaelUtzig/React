// src/components/Contador.tsx
import { Component } from 'react';

// No TypeScript, definimos o "formato" da nossa memória (State)
interface ContadorState {
  contador: number;
}

// O componente de classe recebe o Estado que criamos acima
export class Contador extends Component<{}, ContadorState> {
  constructor(props: {}) {
    super(props);
    
    // 1. Estado Inicial (começa em zero)
    this.state = {
      contador: 0
    };
    
    // 2. Conectando as funções à classe (o famoso 'bind')
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  // 3. Métodos que alteram o Estado usando this.setState
  aumentar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  diminuir() {
    this.setState({ contador: this.state.contador - 1 });
  }

  zerar() {
    this.setState({ contador: 0 }); // Retorna direto para zero!
  }

  // 4. O que vai aparecer na tela
  render() {
    return (
      <div className="caixa-contador">
        <h2>Atividade: State & Classes</h2>
        
        <div className="botoes-contador">
          <button onClick={this.aumentar} className="btn-acao"> Adicionar (+1) </button>
          <button onClick={this.diminuir} className="btn-acao"> Subtrair (-1) </button>
          <button onClick={this.zerar} className="btn-zerar"> Zerar (0) </button>
        </div>
        
        <div className="label-valor">
          Valor: {this.state.contador}
        </div>
      </div>
    );
  }
}