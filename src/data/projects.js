import RotaReal from "../img/RotaReal.png";
import LoginPage from "../img/LoginPage.jpg";

// Para adicionar um projeto novo:
// 1. Coloque a imagem em src/img/
// 2. Importe a imagem aqui em cima
// 3. Adicione um objeto na lista abaixo
//
// Campos:
//   title       - nome que aparece no card
//   description - texto que aparece ao passar o mouse
//   image       - imagem importada
//   link        - (opcional) URL aberta ao clicar; sem link o card não é clicável
const projects = [
  {
    title: "Rota Real",
    description: "Rota Real é um site de reviews automotivos com layout moderno...",
    image: RotaReal,
    link: "https://www.youtube.com",
  },
  {
    title: "Página de Login",
    description: "Uma página de login simples e responsiva...",
    image: LoginPage,
  },
];

export default projects;
