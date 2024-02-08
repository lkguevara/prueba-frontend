import Navbar from "../components/Home/Navbar"
import Asistencia from "../components/Posgrados/Asistencia"
import Experiencia from "../components/Posgrados/Experiencia"
import Invitados from "../components/Posgrados/Invitados"

const Posgrados = () => {
  return (
    <div>
        <Navbar />
        <Asistencia />
        <Experiencia />
        <Invitados />
    </div>
  )
}

export default Posgrados