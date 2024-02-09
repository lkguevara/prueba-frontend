import { TbPointFilled } from "react-icons/tb";

const Egresados = () => {
  return (
    <div className="background-egresados pt-12 ">
    <div className="md:flex">
      <div className="md:w-1/2">
        <h1 className="text-gray-700 text-4xl font-bold text-center md:text-end">Nuestros</h1>
        <h2 className="text-6xl text-yellow-500 font-extrabold text-center md:text-end">
          Egresados
        </h2>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-gray-700 text-4xl font-bold text-center md:text-start w-1/2 ml-8">
          La Universidad tiene más de 150.000 egresados entre pregrado y
          posgrado.
        </h1>
      </div>
</div>
<div className="flex justify-center mt-12">
        <TbPointFilled size={30} color="yellow"/>   
        <TbPointFilled size={30} color="yellow"/>   
        <TbPointFilled size={30} color="yellow"/>   
    </div>
    <h1 className="w-1/2 m-auto text-center text-gray-800 text-xl mt-6">Tenemos el programa REGRESA, el cual ofrece servicios y
beneficios para los egresados Javerianos y sus familias,
como apoyo a la inserción laboral, la red de negocios, los
grupos de egresados en diferentes regiones del país y del
mundo, y eventos de reencuentro por generaciones. </h1>
<div className="bg-blue-800 text-center mt-12">
    <h1 className="text-white w-2/3 m-auto py-12 text-xl font-semibold">
        Si quieres información adicional de este evento podrás solicitarla a través del correo electrónico
        <a href="mailto:expojaverianapos@javeriana.edu.co"> expojaverianapos@javeriana.edu.co</a>
    </h1>
</div>
    </div>
  );
};

export default Egresados;
