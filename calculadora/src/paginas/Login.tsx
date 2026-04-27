import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "../estilos/estilos.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(''); // Limpa os erros anteriores
    
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/principal'); // Vai para a tela principal se der sucesso
    } catch (error) {
      // Exibe a mensagem exata exigida pelo professor
      setErro('Usuário não cadastrado ou senha incorreta!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required />
        
        <button type="submit">Acessar</button>
      </form>

      {/* Label de erro, só aparece se houver falha */}
      {erro && <p style={{ color: 'red', fontWeight: 'bold' }}>{erro}</p>}
      
      <br/>
      <Link to="/cadastro"><button>Criar uma conta</button></Link>
    </div>
  );
};

export default Login;