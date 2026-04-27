import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import "../estilos/estilos.css";

const Cadastro = () => {
  // 1. Estados para os 5 inputs exigidos
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    
    try {
      // 2. Cria o usuário no Firebase Authentication
      const credenciais = await createUserWithEmailAndPassword(auth, email, senha);
      const usuario = credenciais.user;

      // 3. Grava os dados complementares no Firestore usando o UID gerado
      await setDoc(doc(db, "usuarios", usuario.uid), {
        uid: usuario.uid,
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        email: email
      });

      alert('Usuário cadastrado com sucesso!');
      navigate('/'); // Redireciona de volta para a tela de Login

    } catch (error: any) {
      console.error(error);
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastro</h1>
      
      <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
        <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)} required />
        <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} required />
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha (Mín. 6 caracteres)" value={senha} onChange={e => setSenha(e.target.value)} required minLength={6} />
        
        <button type="submit">Cadastrar</button>
      </form>
      
      <br/>
      <Link to="/"><button>Voltar ao Login</button></Link>
    </div>
  );
};

export default Cadastro;