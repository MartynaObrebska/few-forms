import React, { MutableRefObject, useEffect, useState } from "react";

interface Props {
  scrollValue: number;
  productSectionRef: MutableRefObject<HTMLDivElement | null>;
  activePopUp: boolean;
}

function UnderBar(props: Props) {
  const { productSectionRef, scrollValue, activePopUp } = props;
  const [activeUnderBar, setActiveUnderBar] = useState(false);
  const underBarClassName = `underBar${activeUnderBar ? " active" : ""}`;

  useEffect(() => {
    if (activePopUp) setActiveUnderBar(false);
    let timeoutIndex: NodeJS.Timeout | undefined;
    const isScrolledToProductSection =
      productSectionRef.current &&
      scrollValue >= productSectionRef.current.offsetTop &&
      !activeUnderBar;

    if (isScrolledToProductSection) {
      timeoutIndex = setTimeout(() => {
        setActiveUnderBar(true);
      }, 10000);
    }

    return () => {
      clearTimeout(timeoutIndex);
    };
  }, [activeUnderBar, productSectionRef, scrollValue, activePopUp]);

  return (
    <div className={underBarClassName}>
      <div className="status" />
      <p>Someone just joined waitlist 12 minutes ago!</p>
    </div>
  );
}

export default UnderBar;
