import CategoriesCarousel from "./categoriesCarousel/CategoriesCarousel";

function ProductCategories() {
  const categories = [
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
  ];

  const slides = categories.map((category, index) => (
    <div key={index} className="category">
      <div className="picture-container">
        <div className="picture" />
      </div>
      <div className="name">{category}</div>
    </div>
  ));

  return (
    <div className="product-categories">
      <div className="product-categories-content">
        <h1>Explore more furniture categories</h1>
        <CategoriesCarousel
          sliderActive={true}
          slides={slides}
          parts={3}
          carouselHeight={400}
        />
      </div>
    </div>
  );
}

export default ProductCategories;
