import InfiniteCarousel from "../infiniteCarousel/InfiniteCarousel";

function ProductCategories() {
  const categories = [
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
  ];

  const slides = categories.map((category) => (
    <div className="category">
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
        <InfiniteCarousel sliderActive={true} slides={slides} parts={3} />
      </div>
    </div>
  );
}

export default ProductCategories;
