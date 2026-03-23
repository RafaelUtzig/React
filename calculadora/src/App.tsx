import './App.css';

// 1. Componente de Visor
const Painel = () => {
  return (
    <div className="painel">
      0.75
    </div>
  )
}

// 2. Componente de Botão (com a Interface do TypeScript!)
interface BotaoProps {
  tipo: string;
  digito: string;
}

const Botao = (props: BotaoProps) => {
  return (
    <div className={props.tipo}>
      {props.digito}
    </div>
  )
}

// 3. Aplicação Principal
function App() {
  return (
    <div className="painel-botoes">
      <Painel/>
      
      {/* Linha 1 */}
      <Botao tipo="botao-ac" digito="AC" />
      <Botao tipo="botao-operacao" digito="/" />
      
      {/* Linha 2 */}
      <Botao tipo="botao-numero" digito="7" />
      <Botao tipo="botao-numero" digito="8" />
      <Botao tipo="botao-numero" digito="9" />
      <Botao tipo="botao-operacao" digito="*" />
      
      {/* Linha 3 */}
      <Botao tipo="botao-numero" digito="4" />
      <Botao tipo="botao-numero" digito="5" />
      <Botao tipo="botao-numero" digito="6" />
      <Botao tipo="botao-operacao" digito="-" />
      
      {/* Linha 4 */}
      <Botao tipo="botao-numero" digito="1" />
      <Botao tipo="botao-numero" digito="2" />
      <Botao tipo="botao-numero" digito="3" />
      <Botao tipo="botao-operacao" digito="+" />

      {/* Linha 5 (A linha que faltava no código do professor!) */}
      <Botao tipo="botao-zero" digito="0" />
      <Botao tipo="botao-numero" digito="." />
      <Botao tipo="botao-operacao" digito="=" />
    </div>
  );
}

export default App;