import ProductCategories from './productCategories/ProductCategories';
import '@brainhubeu/react-carousel/lib/style.css';

import './productCarousel.css'

const ProductCarousel = (props: { productSectionRef: React.MutableRefObject<HTMLDivElement | null> }) => {
  return <div
    ref={props.productSectionRef}
    className="product-carousel-root"
  >
    <h2>Rethinking the way we manufacture, design, buy, use furniture.</h2>
    <ProductCategories />
  </div>
}

export default ProductCarousel