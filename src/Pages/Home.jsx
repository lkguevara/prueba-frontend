import Carousel from "../components/Home/Carousel";
import Navbar from "../components/Home/Navbar";
import img1 from "../assets/slidesCarousel/img-1.jpg"
import img2 from "../assets/slidesCarousel/img-2.jpg"
import img3 from "../assets/slidesCarousel/img-3.jpg"
import Articles from "../components/Home/Articles";
import Footer from "../components/Home/Footer";


function Home() {
  let slides = [img1, img2, img3];

  return (
    <div>
      <Navbar/>
      <section className="w-full m-auto">
        <Carousel slides={slides} />
      </section>
      <Articles />
      <Footer />
    </div>
  );
}

export default Home;
