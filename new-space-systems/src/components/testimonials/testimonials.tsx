import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import MML from '../../assets/mml.webp'
import Concordia from '../../assets/concordia.webp'
import './testimonials.css'
import { Suspense } from 'react'
import CategoriesCarouselMobile from '../productCarousel/categoriesCarouselMobile/CategoriesCarouselMobile'

const Testimonials = () => {
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
  },]
  const slides = slidesData.map((slide, index) => (
    <div key={index} className="category">
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

    </div>))

  const desktopView = document.body.clientWidth > 1024;
  return <div className="testimonials">
    <h2>Architects and Industry<br />professionals on Space System.</h2>
    <Suspense fallback={<></>}>
      {desktopView ? (
        <Carousel
          offset={25}
          itemWidth={325}
          draggable
          slides={slides}
          plugins={[
            'arrows', 'fastSwipe', 'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3
              }
            },
          ]}
        />
      ) : (
        <CategoriesCarouselMobile
          slides={slides}
        />
      )}
    </Suspense >

  </div>
}

export default Testimonials