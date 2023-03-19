import { title } from "process";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { screenSm } from "../../utility/breakpoints";
import useWindowSize from "../../utility/useWindowSize";

interface Props {
  index: number;
  title: string;
  icons: string[];
  tooltips: string[];
}

function ServiceBarItem(props: Props) {
  const { index, title, icons, tooltips } = props;
  const infoIconRef = useRef<HTMLDivElement>(null);
  const [arrowLeft, setArrowLeft] = useState<string | number>(0);
  const { width } = useWindowSize();

  useEffect(() => {
    if (infoIconRef.current) {
      const infoIconWidth = 18;
      const windowWidth = width ?? 0;
      const isMobile = windowWidth <= screenSm;
      const mobileSize = infoIconRef.current.offsetLeft + infoIconWidth / 2;
      setArrowLeft(isMobile ? mobileSize : "50%");
    }
  }, [width]);

  return (
    <div key={index} className="serviceBarItem">
      <div className={`${icons[index]}`} />
      <p>{title}</p>
      <div className="info" ref={infoIconRef}>
        <div className="tooltip">
          {tooltips[index]}
          <div className="tooltip-arrow" style={{ left: arrowLeft }} />
        </div>
      </div>
    </div>
  );
}
export default ServiceBarItem;
