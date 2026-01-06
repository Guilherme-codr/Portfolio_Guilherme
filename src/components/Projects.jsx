import RotaReal from "../img/RotaReal.png";
import LoginPage from "../img/LoginPage.jpg";

function Projects() {
  return (
    <section>
      <div className="p-4">
        <h1 className="text-white text-4xl font-bold flex justify-center pt-6">
          Projetos em Destaque
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <a
          id="Projeto1"
          className="relative group w-full max-w-lg h-64 rounded-lg overflow-hidden shadow-lg"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={RotaReal}
            alt="Projeto 1"
            className="w-full h-full object-cover"
          />

          <h2 className="absolute bottom-0 w-full text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 transition-opacity duration-300 group-hover:opacity-0">
            Rota Real
          </h2>

          <p className="absolute inset-0 flex items-center justify-center w-full font-bold text-white text-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Rota Real é um site de reviews automotivos com layout moderno...
          </p>
        </a>

        <div
          id="Projeto2"
          className="relative group w-full max-w-lg h-64 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={LoginPage}
            alt="Projeto 2"
            className="w-full h-full object-cover"
          />

          <h2 className="absolute bottom-0 w-full text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 transition-opacity duration-300 group-hover:opacity-0">
            Página de Login
          </h2>

          <p className="absolute inset-0 flex items-center justify-center w-full font-bold text-white text-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Uma página de login simples e responsiva...
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
