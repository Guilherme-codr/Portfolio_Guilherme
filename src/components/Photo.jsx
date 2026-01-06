import foto from "../img/FotoPerfil.jpg";

function Photo() {
  return (
    <div className="flex justify-end ">
      <img
        src={foto}
        alt="Guilherme Lacerda"
        className="rounded-full h-96 object-scale-down"
      />
    </div>
  );
}

export default Photo;
