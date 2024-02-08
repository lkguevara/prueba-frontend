import { PiBooksLight } from "react-icons/pi";
import { TbDatabaseDollar } from "react-icons/tb";
import { LuWarehouse } from "react-icons/lu";
import { IoTicketOutline } from "react-icons/io5";
import { BsChatLeftDots } from "react-icons/bs";
import { Tb360View } from "react-icons/tb";

const Experiencia = () => {
  return (
    <div className="my-12">
      <h1 className="text-gray-600 font-semibold text-4xl text-center mb-12">
        Esperamos disfruten de esta <br /> experiencia virtual que contará con:
      </h1>

      {/* contenedor 1 */}
      <div className="md:flex justify-center text-center py-6 bg-gray-300">
        <button className="bg-sky-600 text-white font-semibold text-3xl w-40 px-4 py-2 rounded-lg">
          50 % dto
        </button>
        <div className="md:w-1/4 text-center mt-2 md:ml-6">
          <p>
            En la inscripción al proceso de admisión para los posgrados con
            inscripciones abierta. Válido durante el evento.*
          </p>
          <p className="text-blue-600">*Aplican términos y condiciones.</p>
        </div>
      </div>

      {/* contenedor 2 */}
      <div className="md:flex justify-center text-center py-6 mt-6 bg-gray-300">
        <div className="md:w-1/4 text-center mt-2 md:mr-6">
          <p>Paga tu matrícula antes del 15 de octubre con precio del 2021.</p>
          <p className="text-blue-600">*Aplican términos y condiciones.</p>
        </div>
        <button className="bg-sky-600 text-white font-semibold text-3xl w-40 px-4 py-2 rounded-lg">
          50 % OCT
        </button>
      </div>

      {/* contenedor 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 mx-12 md:mx-32 gap-4 my-4">
      {/* item 1 */}
        <div className="bg-gray-200 rounded-xl p-4 flex flex-col items-center">
          <PiBooksLight className="text-6xl block items-center mt-6" />
          <p className="text-gray-600 text-center mt-6">7 Centros de Experiencia por áreas de conocimiento.</p>
        </div>
      {/* item 2 */}
        <div className="bg-gray-200 rounded-xl p-4 flex flex-col items-center">
          <TbDatabaseDollar className="text-6xl text-center mt-6" />
          <p className="text-gray-600 text-center mt-6">Charlas de financiación y becas.</p>
        </div>
      {/* item 1 */}
        <div className="bg-gray-200 rounded-xl p-4 flex flex-col items-center">
          <LuWarehouse className="text-6xl text-center mt-6" />
          <p className="text-gray-600 text-center mt-6">Stand de inscripciones.</p>
        </div>
      {/* item 1 */}
        <div className="bg-gray-200 rounded-xl p-4 flex flex-col items-center">
          <IoTicketOutline className="text-6xl text-center mt-6" />
          <p className="text-gray-600 text-center mt-6">Actividades de buen vivir y bienestar.</p>
        </div>
      {/* item 1 */}
        <div className="bg-gray-200 rounded-xl p-4 flex flex-col items-center">
          <BsChatLeftDots className="text-6xl text-center mt-6" />
          <p className="text-gray-600 text-center mt-6">Charlas de áreas de conocimiento.</p>
        </div>
      {/* item 1 */}
        <div className="bg-gray-200 rounded-xl p-4 flex flex-col items-center">
          <Tb360View className="text-6xl text-center mt-6" />
          <p className="text-gray-600 text-center mt-6">Recorridos 360° por el campus y más.</p>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
