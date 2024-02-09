import { Avatar } from "@mui/material";
import icons from "../../assets/posgrados/icons.svg";
import invitado1 from "../../assets/posgrados/invitado1.jpg";
import invitado2 from "../../assets/posgrados/invitado2.jpg";
import invitado3 from "../../assets/posgrados/invitado3.jpg";

import "./posgrados.css";

const Invitados = () => {
  return (
    <>
      {/* invitados */}
      <div className="bg-sky-700 py-12">
        <h1 className="text-white text-center text-3xl">
          INVITADOS ESPECIALES
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col items-center md:w-1/3 p-4">
            <Avatar
              src={invitado1}
              alt="invitado1"
              className="mb-4 "
              sx={{ width: 200, height: 200 }}
            />
            <h2 className="text-white text-xl">Invitado 1</h2>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              nunc nec nisl.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/3 p-4">
            <Avatar
              src={invitado2}
              alt="invitado2"
              className="mb-4 "
              sx={{ width: 200, height: 200 }}
            />
            <h2 className="text-white text-xl">Invitado 2</h2>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              nunc nec nisl.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/3 p-4">
            <Avatar
              src={invitado3}
              alt="invitado3"
              className="mb-4 "
              sx={{ width: 200, height: 200 }}
            />
            <h2 className="text-white text-xl">Invitado 3</h2>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              nunc nec nisl.
            </p>
          </div>
        </div>
      </div>

      {/* conoce el campus */}
      <div className="bg-yellow-500 py-12 md:flex px-12">
        <div className="md:w-1/2 flex items-center">
            <img
            src={icons}
            alt="campus"
            className="w-20 h-20"
            />
            <div>
                <p className="text-gray-800 text-4xl">Conoce el</p>
                <p className="text-gray-800 font-bold text-4xl">Campus de nuestra <br/> Universidad</p>
            </div>
        </div>
        <div className="md:w-1/2 flex items-center ">
            {/* incluir un video */}
            <iframe width="560" height="250" src="https://www.youtube.com/embed/oAO9wPSN0Gk?si=2nuFnlSYwv4p_Kl8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-xl"></iframe>
        </div>
      </div>
    </>
  );
};

export default Invitados;
