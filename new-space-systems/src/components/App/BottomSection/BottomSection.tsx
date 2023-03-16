import Footer from "../../footer/Footer";
import LetsGetInTouch from "../../letsGetInTouch/LetsGetInTouch";
import ProductCarousel from "../../productCarousel/productCarousel";
import RecognisedBy from "../../recognisedBy/RecognisedBy";
import Testimonials from "../../testimonials/testimonials";

interface Props {
  productSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  letsGetInTouchRef: React.MutableRefObject<HTMLDivElement | null>;
}
function BottomSection(props: Props) {
  const { productSectionRef, letsGetInTouchRef } =
    props;
  return (
    <>
      <RecognisedBy />
      <ProductCarousel productSectionRef={productSectionRef} />
      <LetsGetInTouch letsGetInTouchRef={letsGetInTouchRef} />
      <Testimonials />
      <Footer />
    </>
  );
}

export default BottomSection;
