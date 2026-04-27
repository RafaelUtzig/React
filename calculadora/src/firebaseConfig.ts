import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 👇 APAGUE ESTE BLOCO ABAIXO E COLE O SEU PRÓPRIO FIREBASE CONFIG AQUI 👇
const firebaseConfig = {
  apiKey: "AIzaSyBdyWdOKL4ONF-yv603Rkx_aobuvUvwfw0",
  authDomain: "loginfaculdade-2f1e6.firebaseapp.com",
  projectId: "loginfaculdade-2f1e6",
  storageBucket: "loginfaculdade-2f1e6.firebasestorage.app",
  messagingSenderId: "885072481961",
  appId: "1:885072481961:web:372429263fcfa59e51e3b8",
  measurementId: "G-2T10TRV0RZ"
};
// 👆 ------------------------------------------------------------------ 👆

// Inicializa os serviços do Firebase na nossa aplicação
const app = initializeApp(firebaseConfig);

// Exporta as ferramentas para podermos usar nas nossas páginas de Login e Cadastro
export const auth = getAuth(app);
export const db = getFirestore(app);