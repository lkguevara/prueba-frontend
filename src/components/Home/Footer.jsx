import logo from "../../assets/logo-svg.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="md:flex md:justify-around items-center p-4 bg-gray-300 z-10">
      <img className="w-52 block m-auto md:m-0" src={logo} alt="logo" />

      <div className="text-gray-700 my-6 text-center md:my-0">
        <p className="">Programas</p>
        <p className="">Comunidad</p>
        <p className="">Recursos digitales</p>
        <p className="">Ayuda</p>
      </div>

      <div className="text-gray-700 my-6 text-center md:my-0">
        <p className="">Dirección de los cursos presenciales:</p>
        <p className="">Bogotá D.C., Colombia - Carrera 7 No 40-62</p>
        <p className="">Teléfono: (57 1) 320 83 20</p>
        <br />
        <p className="">Cali, Colombia - Calle 18 No 118-250</p>
        <p className="">Teléfono: (57 2) 320 83 20 / 485 64 00</p>
      </div>

      {/* redes */}
      <div>
        <p className="mb-4 my-6 text-center md:my-0">Síguenos en redes sociales</p>
        <div className="flex justify-around items-center">
          <FaFacebookF size={25} color="#001B79"  />
          <FaTwitter size={25}  color="#001B79" />
          <RiInstagramFill size={25} color="#001B79"  />
          <IoLogoYoutube size={25}  color="#001B79"   />
        </div>
      </div>
    </div>
  );
};

export default Footer;
