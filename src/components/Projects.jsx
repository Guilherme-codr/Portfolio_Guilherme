function Projects() {
  return (
    <section>
      <div className="p-4">
        <h1 className="text-white text-4xl font-bold flex justify-center pt-6">
          Projetos em Destaque
        </h1>
      </div>
      <div className="w-full  mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <a
          id="Projeto1"
          className="relative group w-full h-full"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./src/img/RotaReal.png"
            alt="Projeto 1"
            className="w-full h-full object-cover"
          />

          {/* Título visível por padrão, some no hover */}
          <h2 className="absolute bottom-0 w-full text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 transition-opacity duration-300 group-hover:opacity-0">
            Rota Real
          </h2>

          {/* Parágrafo invisível por padrão, aparece no hover */}
          <p className="absolute inset-0 flex items-center justify-center w-full font-bold text-white text-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Rota Real é um site de reviews automotivos com layout moderno,
            desenvolvido em React e Tailwind CSS, exibindo avaliações de carros
            de forma clara e interativa.
          </p>
        </a>

        <div id="Projeto2" className="relative group w-full h-full">
          <img
            src="./src/img/LoginPage.jpg"
            alt="Projeto 2"
            className="w-full h-full object-cover"
          />

          {/* Título visível por padrão, some no hover */}
          <h2 className="absolute bottom-0 w-full text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 transition-opacity duration-300 group-hover:opacity-0">
            Página de Login
          </h2>

          {/* Parágrafo invisível por padrão, aparece no hover */}
          <p className="absolute inset-0 flex items-center justify-center w-full font-bold text-white text-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Uma página de login simples e responsiva, desenvolvida com Html5 e
            css, que permite aos usuários acessar suas contas de forma segura e
            intuitiva.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
