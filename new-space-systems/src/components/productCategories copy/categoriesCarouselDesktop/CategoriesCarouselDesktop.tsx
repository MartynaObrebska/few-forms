import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import './categoriesCarouselDesktop.css'

interface Props {
  slides: JSX.Element[];
}

function CategoriesCarouselDesktop(props: Props) {

  return (
    <Carousel
      offset={20}
      itemWidth={510}
      draggable
      slides={props.slides}
      plugins={[
        'centered', 'arrows', 'fastSwipe', 'infinite',
        {
          resolve: slidesToShowPlugin
        }
      ]}
    />
  );
}

export default CategoriesCarouselDesktop;
