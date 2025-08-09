import StackIcon from "tech-stack-icons";

function About() {
  return (
    <div>
        <section id="about" className="text-white flex flex-col">
      <h2 className="text-3xl font-bold">Sobre Mim</h2>
      <p className="mt-2">Sou um desenvolvedor full-stack apaixonado, com <br /> experiência na construção de aplicações web.</p>
    </section>
    
    <section>
        <h3 className="text-2xl text-white font-bold mt-4">Tecnologias</h3>
        <div className="flex m-2">
          <StackIcon name="react" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="js" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="nodejs" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="mongodb" className="w-8 h-8 rounded mr-4" />
          <StackIcon name="expressjs" variant="dark" className="w-10 h-10 rounded" />
        </div>
    </section>
    </div>


  );
}

export default About;
