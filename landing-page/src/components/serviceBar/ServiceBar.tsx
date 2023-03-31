import { useEffect, useRef, useState } from "react";
import { screenSm } from "../../utility/breakpoints";
import "./serviceBar.css";
import ServiceBarItem from "./ServiceBarItem";

function ServiceBar() {
  const titles = ["Customise online", "Fast delivery", "Easy change or return"];
  const icons = ["customise", "delivery", "return"];
  const tooltips = [
    "We strive to provide high-quality products and ensure your satisfaction. We understand that buying furniture online can be difficult, which is why we offer plenty of time for you to make your decision. If for any reason you are not satisfied, we will be happy to collect the product and provide a full refund.",
    "We strive to provide high-quality products and ensure your satisfaction. We understand that buying furniture online can be difficult, which is why we offer plenty of time for you to make your decision. If for any reason you are not satisfied, we will be happy to collect the product and provide a full refund.",
    "We strive to provide high-quality products and ensure your satisfaction. We understand that buying furniture online can be difficult, which is why we offer plenty of time for you to make your decision. If for any reason you are not satisfied, we will be happy to collect the product and provide a full refund.",
  ];

  return (
    <div className="serviceBar">
      {titles.map((title, index) => (
        <ServiceBarItem
          key={index}
          index={index}
          title={title}
          icons={icons}
          tooltips={tooltips}
        />
      ))}
    </div>
  );
}

export default ServiceBar;
