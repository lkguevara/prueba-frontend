import Card from './Card'
import './home.css'

const Articles = () => {
  return (
    <div id="articulos" className="bg-white pt-12 relative top-[-102px] rounded-t-[74px]">
        <div className="border-top"/>
        <h1 className="text-gray-500 font-medium text-center text-3xl ">Entérate de los últimos artículos de <br /> nuestra universidad</h1>
        <Card />
        <Card />
    </div>
  )
}



export default Articles