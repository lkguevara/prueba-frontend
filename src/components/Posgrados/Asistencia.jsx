import "./posgrados.css";
import image from "../../assets/posgrados/image.png";
import Form from "./Form";

const Asistencia = () => {
  return (
    <div className="background py-12 md:flex">
      <img src={image} alt="imagen" className="w-96 img" />
      {/* Titulo principal */}
      <div className="md:w-1/2 text-center pt-12">
        <h1 className="title font-black text-7xl">E X P O</h1>
        <h2 className="subtitle font-black text-6xl">JAVERIANA</h2>
        <h3 className="title font-black text-4xl ">P O S G R A D O S</h3>
        <button className="bg-gray-500 text-white px-2 py-1 rounded-lg my-4">
          V I R T U A L
        </button>
        {/* Fechas */}
        <div className="w-1/3 m-auto pt-12 text-center border-4 border-neutral-50 -500/100">
          <h1 className="text-gray-600 text-xl">Fecha:</h1>
          <h2 className="font-medium text-gray-600 text-6xl">1 y 2</h2>
          <h2 className="font-medium text-gray-600 text-4xl">de octubre</h2>
          <h2 className="font-medium text-gray-600 text-xl">Hora: 2:00 pm</h2>
          <h2 className="font-medium text-gray-600 text-xl">a 6:00 pm</h2>
        </div>
      </div>
      <div className="md:w-1/2 m-auto pt-12 text-center z-10">
        <Form />
      </div>
    </div>
  );
};

export default Asistencia;
