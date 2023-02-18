import { useState } from "react";
import AccordionTab from "./accordionTab/AccordionTab";

function Accordion() {
  const [activeLabel, setActiveLabel] = useState<number | null>(null);
  const tabs = [
    {
      label: "Sizes",
      content:
        "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    },
    {
      label: "Colors",
      content:
        "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    },
    {
      label: "Storage features",
      content:
        "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    },
    {
      label: "Materials",
      content:
        "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    },
    {
      label: "Delivery & Assembly",
      content:
        "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    },
  ];

  return (
    <div className="accordion">
      {tabs.map((tab, index) => (
        <AccordionTab
          key={index}
          index={index}
          tab={tab}
          activeLabel={activeLabel}
          setActiveLabel={setActiveLabel}
        />
      ))}
    </div>
  );
}

export default Accordion;
