import Card from './Card'
import './home.css'

const Articles = () => {
  return (
    <div className="bg-white pt-12 relative top-[-102px] rounded-t-[74px] overflow-y-auto altura">
        <div className="border-top"/>
        <h1 className="text-gray-500 font-medium text-center text-3xl ">Entérate de los últimos artículos de <br /> nuestra universidad</h1>
        <Card />
    </div>
  )
}



export default Articles