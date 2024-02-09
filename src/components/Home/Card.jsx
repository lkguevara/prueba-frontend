import { Link } from "react-router-dom";
import img1 from "../../assets/cards/01.jpg";
import img2 from "../../assets/cards/02.jpg";
import img3 from "../../assets/cards/03.jpg";
import img4 from "../../assets/cards/04.jpg";
import { FiChevronUp } from "react-icons/fi";

const Card = () => {
  const cards = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    }
  ];

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-40 pt-12 ">
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
          <div className="flex justify-between items-center px-4 pb-6">
            <div>
              <p className="text-gray-500 text-sm pb-6">
                Lorem ipsum <br /> dolor sit amet
              </p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit, adipiscing elit, sed nibh amet euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat diam
                nonummy.
              </p>
            </div>
          </div>

          {/* Aquí agregamos el nuevo botón naranja con la flecha */}
          <button className="text-white font-bold py-2 rounded-full bg-orange-500 w-12 h-12 flex items-center justify-center absolute right-[48%] bottom-[-120px] " onClick={handleClick}>
            <FiChevronUp size="20px" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
