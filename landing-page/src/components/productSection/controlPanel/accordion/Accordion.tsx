import { useState } from "react";

function Accordion() {
  const [activeLabel, setActiveLabel] = useState<number | null>(null);
  const labels = [
    "Sizes",
    "Colors",
    "Storage features",
    "Materials",
    "Delivery & Assembly",
  ];
  const texts = [
    "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
    "Security: The ability for the website to protect against hacking and other security threats, ensuring that user data. Security: The ability for the website to protect against hacking and other security threats, ensuring that user data.",
  ];

  return (
    <div className="accordion">
      {labels.map((label, index) => {
        const isActive = activeLabel === index;
        const activeToggle = isActive ? " active" : "";
        const handleClickLabel = () => setActiveLabel(isActive ? null : index);

        return (
          <div key={index} className="info">
            <div className="label" onClick={handleClickLabel}>
              <div className={`plus${activeToggle}`} />
              <p className={`labelName${activeToggle}`}>{label}</p>
            </div>
            <div className={`text${activeToggle}`}>{texts[index]}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
