import { useState } from 'react';
import './App.css';

/**
 * Componente principal da aplicação.
 * Renderiza a tela de login e gerencia a validação das credenciais de acesso.
 */
function App() {
  // Estados para armazenar os valores digitados nos campos de input
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // Estado responsável por armazenar a mensagem de feedback visual para o usuário
  const [mensagem, setMensagem] = useState('');

  /**
   * Função para validar os dados inseridos.
   * Acionada no evento onClick do botão "Acessar".
   */
  const handleLogin = () => {
    // Verifica se as credenciais coincidem com as exigidas na especificação
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="form-group">
        {/* Campo controlado do e-mail */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        
        {/* Campo controlado da senha */}
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />

        {/* Botão que dispara a função de validação */}
        <button onClick={handleLogin}>
          Acessar
        </button>
      </div>

      {/* Renderização da label de feedback. A tag só recebe conteúdo se o state 'mensagem' for preenchido */}
      <p className="feedback-message">
        {mensagem}
      </p>
    </div>
  );
}

export default App;