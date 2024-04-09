# SistemaDeLogin
Projeto feito com autenticação de usuario pelo frontend em REACT NATIVE, com banco de dados Firebase.
primeiro passo: Configurar a conta do projeto no firebase, ele feito isso ele ira mandar um script e um comando para instalar as dependencias do firebase no react, crie uma pasta.js fora da pasta do projeto e coloque o codigo q ele vai gerar(seria algo assim:)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCVMP_mvoaa2tXA6LibSG7DRuoCxpQdyNQ",
  authDomain: "applogin-720cd.firebaseapp.com",
  projectId: "applogin-720cd",
  storageBucket: "applogin-720cd.appspot.com",
  messagingSenderId: "428841264469",
  appId: "1:428841264469:web:3455de945e5eeecfee7bdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const AUTH = getAuth(app)


configure o projeto para receber e-mail e senha para usuario, e pronto inicie o app e faça login, essa autenticação é feita pelo frontend e não pelo backend.
