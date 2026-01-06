import StackIcon from "tech-stack-icons";

function About() {
  return (
    <div className="p-4">
        <section id="about" className="text-white flex flex-col">
      <h2 className="text-3xl font-bold">Sobre mim</h2>
      <p className="mt-2 font-mono w-96 text-justify">Faço faculdade de Análise e Desenvolvimento de Sistemas. Estou aprimorando meus conhecimentos em React com Tailwind CSS, assim como em Node.js com Express, visando o desenvolvimento de aplicações web modernas e de alta qualidade. Sou dedicado, comprometido com o aprendizado contínuo e busco sempre entregar soluções eficientes e bem estruturadas.
</p>
    </section>
    
    <section>
        <h3 className="text-2xl text-white font-bold mt-4">Tecnologias</h3>
        <div className="flex m-2">
          <StackIcon name="react" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="js" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="nodejs" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="mongodb" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="expressjs" variant="dark" className="w-10 h-10 rounded mr-4" />
          <StackIcon name="nestjs" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="postman" className="w-8 h-8 rounded mr-4" />
        </div>
    </section>
    </div>


  );
}

export default About;
