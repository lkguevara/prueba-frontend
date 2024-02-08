import Carousel from "../components/Home/Carousel";
import Navbar from "../components/Home/Navbar";
import img1 from "../assets/slidesCarousel/img-1.jpg";
import img2 from "../assets/slidesCarousel/img-2.jpg";
import img3 from "../assets/slidesCarousel/img-3.jpg";
import rectangulo from "../assets/rectangulo.svg";
import img from "../assets/cards/02.jpg";
import card1 from "../assets/cards/03.jpg";
import card2 from "../assets/cards/04.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Footer from "../components/Home/Footer";
import AccordionUsage from "../components/Article/Accordion";

let slides = [img1, img2, img3];
const cards = [
  {
    img: card1,
  },
  {
    img: card2,
  },
];

const Article = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Carousel slides={slides} />

      <div
        id="articulos"
        className="bg-white pt-12 relative top-[-102px] rounded-t-[74px] md:flex justify-around"
      >
        <section className="md:w-3/4 md:ml-32 ">
          {/* titulo con imagen */}
          <div className="m-8 flex justify-start items-center">
            <h1 className="text-4xl font-semibold text-gray-700 z-10 pl-6">
              Consectetuer adipiscing elit.
            </h1>
            <img
              src={rectangulo}
              alt="rectangulo"
              className="w-20 h-20 absolute"
            />
          </div>
          {/* Párrafos */}
          <p className="m-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper{" "}
            <span className="font-bold text-orange-500">
              {" "}
              suscipit lobortis nisl
            </span>
            ut aliquip ex ea commodo consequat.
          </p>
          <p className="m-8 text-gray-600">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="m-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.{" "}
            <span className="font-bold text-orange-500">
              {" "}
              Ut wisi enim ad autem vel eum
            </span>
            iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
            et
          </p>

          {/* card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2  pt-12 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl shadow-md flex flex-col justify-between"
              >
                <img
                  src={card.img}
                  alt="imagen"
                  className="w-full h-40 object-cover rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                />
                <button className="bg-blue-600 text-white font-bold py-2 rounded-b-xl w-24 relative bottom-10">
                  <Link to="/article">Leer más</Link>
                </button>
                <div className="flex justify-between items-center px-4">
                  <div>
                    <p className="text-gray-500 text-sm font-bold">
                      Lorem ipsum <br /> dolor sit amet
                    </p>
                    <p className="text-gray-500 text-sm">
                      Lorem ipsum dolor sit, adipiscing elit, sed nibh amet
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat diam nonummy.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="flex items-center mt-12 py-2 px-8 gap-2 text-white bg-blue-600 rounded-bl-lg rounded-tr-lg"
            onClick={() => navigate("/")}
          >
            <FiChevronRight />
            Ver más artículos
          </button>
        </section>

        {/* Section 2 */}
        <section className="md:w-3/4 md:mr-20">
          <img
            src={img}
            alt="imagen"
            className="w-1/2 h-96 object-cover rounded-xl mt-8 block m-auto md:m-0"
          />
          <p className="text-xs text-gray-600 mt-2">
            <span className="font-bold ">Lorem ipsum dolor sit,</span>{" "}
            adipiscing elit, sed nibh amet euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat diam nonummy.
          </p>
          <p className="text-gray-600 mt-16">
            accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi.
          </p>
          <p className="text-gray-600 mt-16">
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna zaliquam erat
            volutpat zzril delenit augue duis dolore.
          </p>
          <AccordionUsage />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
