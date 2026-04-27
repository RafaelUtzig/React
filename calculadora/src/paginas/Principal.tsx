import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import "../estilos/estilos.css";

const Principal = () => {
  const [dadosUsuario, setDadosUsuario] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fica "escutando" para saber se alguém fez login
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Se tem usuário logado, vai no Firestore pegar os dados dele
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDadosUsuario(docSnap.data());
        }
      } else {
        // Se não tiver ninguém logado (ou se ele deslogar), expulsa para a tela de Login
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const sair = async () => {
    await signOut(auth); // Faz o logoff oficial no Firebase
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Página Principal</h1>
      
      {/* Se já carregou os dados do Firestore, mostra na tela */}
      {dadosUsuario ? (
        <div>
          <p><strong>Nome:</strong> {dadosUsuario.nome}</p>
          <p><strong>Sobrenome:</strong> {dadosUsuario.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {dadosUsuario.dataNascimento}</p>
        </div>
      ) : (
        <p>Buscando seus dados no banco...</p>
      )}

      <br/>
      <button onClick={sair} style={{ backgroundColor: '#ffcccc' }}>Sair da Conta</button>
    </div>
  );
};

export default Principal;