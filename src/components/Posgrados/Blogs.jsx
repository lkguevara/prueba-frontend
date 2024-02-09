import { FiChevronRight } from 'react-icons/fi';
import Card from '../Home/Card'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
  return (
    <div className="text-center my-12">
        <p className="text-gray-600 text-2xl">Encuentra aquí los</p>
        <h1 className="text-gray-800 text-4xl font-bold pt-2">BLOGS DESTACADOS</h1>
        <p className="text-gray-500 text-2xl w-2/3 m-auto pt-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore magna
aliquam erat volutpat. Ut wisi enim ad minim veniam. </p>
    <div className='flex justify-center items-center'>
        <IoIosArrowBack className='absolute left-12 cursor-pointer hidden md:block' size={50}/>
        <Card />
        <IoIosArrowForward className='absolute right-12 cursor-pointer hidden md:block' size={50}/>
    </div>
    <button
            className="flex m-auto items-center mt-12 py-2 px-8 gap-2 text-white bg-blue-600 rounded-bl-lg rounded-tr-lg"
            onClick={() => navigate("/")}
          >
            <FiChevronRight />
            Ver más
          </button>
    </div>
  )
}

export default Blogs