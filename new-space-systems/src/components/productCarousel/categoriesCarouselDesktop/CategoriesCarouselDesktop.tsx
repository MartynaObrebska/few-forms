import { useState } from "react";
import Carousel from "react-simply-carousel";
import Arrow from '../../../assets/arrow.svg'
interface Props {
  slides: JSX.Element[];
}

function CategoriesCarouselDesktop(props: Props) {
  const [activeSlide, setActiveSlide] = useState(0);

  return <Carousel
    containerProps={{
      style: {
        width: "100%",
        justifyContent: "space-between",
        userSelect: "none",
        position: 'relative',
      }
    }}
    preventScrollOnSwipe
    swipeTreshold={60}
    forwardBtnProps={{
      children: <img src={Arrow} alt="arrow-next" />,
      style: {
        border: 'none',
        background: '#3A3A3A',
        width: 35,
        height: 35,
        borderRadius: '50%',
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 17.5px)',
        right: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '2px'
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
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 17.5px)',
        left: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '2px'
      }
    }}
    // itemsToShow={3}
    speed={400}
    activeSlideIndex={activeSlide}
    onRequestChange={setActiveSlide}
    itemsListProps={{
      style: {
        position: 'relative',
        gap: '20px'
      }
    }}
  >
    {props.slides}
  </Carousel>
}

export default CategoriesCarouselDesktop;
