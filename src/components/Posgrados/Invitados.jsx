import invitado1 from '../../assets/posgrados/invitado1.jpg'
import invitado2 from '../../assets/posgrados/invitado2.jpg'
import invitado3 from '../../assets/posgrados/invitado3.jpg'

import './posgrados.css'

const Invitados = () => {
  return (
    <div className='bg-sky-700 py-12'>
        <h1 className='text-white text-center text-3xl'>INVITADOS ESPECIALES</h1>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='flex flex-col items-center md:w-1/3 p-4'>
                <img src={invitado1} alt='invitado1' className='rounded-full mb-4' />
                <h2 className='text-white text-xl'>Invitado 1</h2>
                <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nisl.</p>
            </div>
            <div className='flex flex-col items-center md:w-1/3 p-4'>
                <img src={invitado2} alt='invitado2' className='rounded-full mb-4' />
                <h2 className='text-white text-xl'>Invitado 2</h2>
                <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nisl.</p>
            </div>
            <div className='flex flex-col items-center md:w-1/3 p-4'>
                <img src={invitado3} alt='invitado3' className='rounded-full mb-4' />
                <h2 className='text-white text-xl'>Invitado 3</h2>
                <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nisl.</p>
            </div>
        </div>
    </div>
  )
}

export default Invitados