import React from "react";

function ServiceBar() {
  const titles = ["Customise online", "Fast delivery", "Easy change or return"];
  const icons = ["customise", "delivery", "return"];
  return (
    <div className="serviceBar">
      {titles.map((title, index) => (
        <div key={index} className="serviceBarItem">
          <div className={`${icons[index]}`} />
          <p>{title}</p>
          <div className="info" />
        </div>
      ))}
    </div>
  );
}

export default ServiceBar;
