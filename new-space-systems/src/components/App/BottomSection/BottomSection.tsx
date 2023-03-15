import Footer from "../../footer/Footer";
import LetsGetInTouch from "../../letsGetInTouch/LetsGetInTouch";
import PopUp from "../../popUp/PopUp";
import ProductCarousel from "../../productCarousel/productCarousel";
import RecognisedBy from "../../recognisedBy/RecognisedBy";
import Testimonials from "../../testimonials/testimonials";

interface Props {
  activePopUp: boolean;
  productSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  handleOpenPopUp: () => void;
  handleClosePopUp: () => void;
}
function BottomSection(props: Props) {
  const { activePopUp, productSectionRef, handleOpenPopUp, handleClosePopUp } =
    props;
  return (
    <>
      <RecognisedBy />
      <ProductCarousel productSectionRef={productSectionRef} />
      <LetsGetInTouch />
      <Testimonials />
      <Footer />
      {activePopUp && <PopUp handleClosePopUp={handleClosePopUp} />}
    </>
  );
}

export default BottomSection;
