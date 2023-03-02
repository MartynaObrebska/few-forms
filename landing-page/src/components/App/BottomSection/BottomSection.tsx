import Footer from "../../footer/Footer";
import PopUp from "../../popUp/PopUp";
import ProductCategories from "../../productCategories/ProductCategories";
import ProductSection from "../../productSection/ProductSection";
import ServiceBar from "../../serviceBar/ServiceBar";
import Testimonials from "../../testimonials/Testimonials";

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
      <ProductSection
        productSectionRef={productSectionRef}
        handleOpenPopUp={handleOpenPopUp}
      />
      <ServiceBar />
      <ProductCategories />
      <Testimonials handleOpenPopUp={handleOpenPopUp} />
      <Footer />
      {activePopUp && <PopUp handleClosePopUp={handleClosePopUp} />}
    </>
  );
}

export default BottomSection;
