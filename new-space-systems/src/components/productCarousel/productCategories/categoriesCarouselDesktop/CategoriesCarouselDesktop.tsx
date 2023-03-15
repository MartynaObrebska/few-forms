import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

interface Props {
  slides: JSX.Element[];
}

function CategoriesCarouselDesktop(props: Props) {

  return <Carousel
    offset={20}
    itemWidth={510}
    draggable
    slides={props.slides}
    plugins={[
      'arrows', 'fastSwipe',
      {
        resolve: slidesToShowPlugin,
        options: {
          numberOfSlides: props.slides.length
        }
      },
    ]}
  />
}

export default CategoriesCarouselDesktop;
