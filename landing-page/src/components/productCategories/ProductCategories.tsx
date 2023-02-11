import React from "react";

function ProductCategories() {
  const categories = [
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
  ];
  return (
    <div className="productCategories">
      <h1>Explore more furniture categories</h1>
      <div className="categoriesContainer">
        <div className="categoriesList">
          {categories.map((category) => (
            <div className="category">
              <div className="pictureContainer">
                <div className="picture" />
              </div>
              <div className="name">{category}</div>
            </div>
          ))}
        </div>
        <div className="arrow left disabled" />
        <div className="arrow right" />
      </div>
      <div className="orderBar">
        <div className="number" />
      </div>
    </div>
  );
}

export default ProductCategories;
