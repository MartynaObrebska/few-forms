import ProductCategories from './productCategories/ProductCategories';
import './productCarousel.css'

const ProductCarousel = (props: { productSectionRef: React.MutableRefObject<HTMLDivElement | null> }) => {
  return <div
    ref={props.productSectionRef}
    className="product-carousel-root"
  >
    <h2>Enjoy being an Architect,<br />not a project manager</h2>
    <ProductCategories />
  </div>
}

export default ProductCarousel