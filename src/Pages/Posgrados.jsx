import Navbar from "../components/Home/Navbar"
import Asistencia from "../components/Posgrados/Asistencia"
import Blogs from "../components/Posgrados/Blogs"
import Egresados from "../components/Posgrados/Egresados"
import Experiencia from "../components/Posgrados/Experiencia"
import Invitados from "../components/Posgrados/Invitados"
import Footer from "../components/Home/Footer"

const Posgrados = () => {
  return (
    <div>
        <Navbar />
        <Asistencia />
        <Experiencia />
        <Invitados />
        <Blogs  />
        <Egresados />
        <Footer />
    </div>
  )
}

export default Posgrados