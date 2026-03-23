// src/App.tsx
import './App.css';
import { Contador } from './components/Contador'; // Importando o nosso novo componente!

// ==========================================
// 1. COMPONENTES DA CALCULADORA
// ==========================================

// Visor da Calculadora
const Painel = () => {
  return (
    <div className="painel">
      0.75
    </div>
  );
};

// Botão da Calculadora (com TypeScript Interface)
interface BotaoProps {
  tipo: string;
  digito: string;
}

const Botao = (props: BotaoProps) => {
  return (
    <div className={props.tipo}>
      {props.digito}
    </div>
  );
};

// ==========================================
// 2. APLICAÇÃO PRINCIPAL (APP)
// ==========================================

function App() {
  return (
    /* O container-central usa o Flexbox que configuramos no CSS para alinhar lado a lado */
    <div className="container-central">
      
      {/* --------------------------------- */}
      {/* PROJETO 1: Calculadora Estática   */}
      {/* --------------------------------- */}
      <div className="painel-botoes">
        <Painel />
        
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

        {/* Linha 5 (A linha final do botão zero!) */}
        <Botao tipo="botao-zero" digito="0" />
        <Botao tipo="botao-numero" digito="." />
        <Botao tipo="botao-operacao" digito="=" />
      </div>

      {/* --------------------------------- */}
      {/* PROJETO 2: Contador com State     */}
      {/* --------------------------------- */}
      <Contador />

    </div>
  );
}

export default App;