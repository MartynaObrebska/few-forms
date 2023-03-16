
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import image1 from '../../../assets/lay-on-sofa.webp'
import image2 from '../../../assets/phone-screen1.webp'
import image3 from '../../../assets/machine.webp'
import image4 from '../../../assets/drawer.webp'
import image5 from '../../../assets/phone-screen2.webp'

function ProductCategories() {
  const categories = [
    { image: image1, title: "Stress-free experience.", description: 'Designed online in less than 1 hour, delivered within 1 week, assembled easily with 1 tool.' },
    { image: image2, title: "No design skills required.", description: 'Design recommendations based on your needs, not your design skills and powered by algorithms. ' },
    { image: image3, title: "Serialised, but bespoke.", description: 'As custom as bespoke, but manufactured serially, due to proprietary hardware innovations.' },
    { image: image4, title: "Reconfigurable & reusable.", description: 'Switch, extend or shrink if your needs change or return furniture and get a pay back.' },
    { image: image5, title: "Furniture as a service.", description: 'First custom-fit furniture available in subscription, to enjoy furniture without ownership downsides.' },
  ];

  const slides = categories.map((category, index) => (
    <div key={index} className="category">
      <div className="picture-container">
        <img src={category.image} />
      </div>
      <div className="bottom-section">
        <div className="title">{category.title}</div>
        <div className="description">{category.description}</div>
      </div>

    </div>
  ));

  const desktopView = document.body.clientWidth > 1024;
  const pluginsDesktop = [
    'centered', 'arrows', 'fastSwipe', 'infinite',
    {
      resolve: slidesToShowPlugin
    }
  ]
  const pluginsMobile = [
    'centered', 'infinite',
    {
      resolve: slidesToShowPlugin,
      options: 1

    }
  ]
  return (
    <Carousel
      offset={20}
      itemWidth={desktopView ? 510 : 325}
      draggable
      slides={slides}
      plugins={[
        'centered', 'arrows', 'fastSwipe', 'infinite',
        {
          resolve: slidesToShowPlugin
        }
      ]}
      breakpoints={{
        420: {
          plugins: [
            'infinite', 'centered',
            {
              resolve: slidesToShowPlugin
            }
          ]
        }
      }}
    />
  );
}

export default ProductCategories;
