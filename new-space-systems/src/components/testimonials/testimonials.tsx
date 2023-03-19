import MML from '../../assets/mml.webp'
import Concordia from '../../assets/concordia.png'
import './testimonials.css'
import Arrow from '../../assets/arrow.svg'
import { Suspense, useState } from 'react'
import Carousel from "react-simply-carousel";
import CategoriesCarouselMobile from '../productCarousel/categoriesCarouselMobile/CategoriesCarouselMobile'

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesData = [{
    image: MML,
    description: 'I’m thrilled about the Space System and its potential to revolutionize the way we think about furniture design.',
    author: 'Paulina Masternak',
    ocupation: 'MML Studio, Poland'
  }, {
    image: Concordia,
    description: 'few. determination, willingness to test and experiment while working on the product are good indicators of their further business adventure.',
    author: 'Edyta Paul',
    ocupation: 'Concordia Design Institute, Poland'
  }, {
    image: MML,
    description: 'We strongly believe every interior and project is unique and should be tailor-made. This is why the Space System seems to be a perfect fit for our offer.',
    author: 'Lech Moczulski',
    ocupation: 'MML Studio, Poland'
  }, {
    image: MML,
    description: 'I’m thrilled about the Space System and its potential to revolutionize the way we think about furniture design.',
    author: 'Paulina Masternak',
    ocupation: 'MML Studio, Poland'
  }, {
    image: Concordia,
    description: 'few. determination, willingness to test and experiment while working on the product are good indicators of their further business adventure.',
    author: 'Edyta Paul',
    ocupation: 'Concordia Design Institute, Poland'
  }, {
    image: MML,
    description: 'We strongly believe every interior and project is unique and should be tailor-made. This is why the Space System seems to be a perfect fit for our offer.',
    author: 'Lech Moczulski',
    ocupation: 'MML Studio, Poland'
  }]
  const slides = slidesData.map((slide, index) => (
    <div key={index} className="category">
      <div className='container'>
        <div className="picture-container">
          <img src={slide.image} />
        </div>
        <div className="bottom-section">
          <div className="description">{slide.description}</div>
          <div className="author-section">
            <div className="author">{slide.author}</div>
            <div className="ocupation">{slide.ocupation}</div>
          </div>
        </div>
      </div>
    </div>))

  const desktopView = document.body.clientWidth > 1024;
  return <div className="testimonials">
    <h2>Architects and Industry<br />professionals on Space System.</h2>
    <Suspense fallback={<></>}>
      {desktopView ? (
        <Carousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "center",
              userSelect: "none",
              alignItems: 'center'
            }
          }}
          swipeTreshold={60}
          forwardBtnProps={{
            children: <img src={Arrow} alt="arrow-next" />,
            style: {
              border: 'none',
              background: '#3A3A3A',
              width: 35,
              height: 35,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: '2px',
              margin: '0 30px 0 35px'
            }
          }}
          backwardBtnProps={{
            children: <img src={Arrow} alt="arrow-next" style={{ transform: 'rotate(180deg)' }} />,
            style: {
              border: 'none',
              background: '#3A3A3A',
              width: 35,
              height: 35,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '2px',
              margin: '0 25px 0 35px'
            }
          }}
          speed={400}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          infinite={true}
          itemsToShow={3}
          innerProps={{ style: { flexGrow: 1 } }}
        >
          {slides}
        </Carousel>
      ) : (
        <CategoriesCarouselMobile
          slides={slides}
        />
      )}
    </Suspense >

  </div>
}

export default Testimonials