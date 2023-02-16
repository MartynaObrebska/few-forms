import { useRef } from "react";

interface Props {
  index: number;
  tab: {
    label: string;
    content: string;
  };
  activeLabel: number | null;
  setActiveLabel: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccordionTab = (props: Props) => {
  const { activeLabel, index, setActiveLabel, tab } = props;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isActive = activeLabel === index;
  const activeToggle = isActive ? " active" : "";
  const handleClickLabel = () => setActiveLabel(isActive ? null : index);

  return (
    <div key={index} className="tab">
      <label className="tab-label" onClick={handleClickLabel}>
        <div className={`tab-label-plus${activeToggle}`} />
        <p className={`tab-label-name${activeToggle}`}>{tab.label}</p>
      </label>
      <div
        className={`tab-content-wrapper${activeToggle}`}
        style={{
          maxHeight:
            isActive && contentRef.current
              ? contentRef.current.clientHeight
              : 0,
        }}
      >
        <div ref={contentRef} className={`tab-content${activeToggle}`}>
          {tab.content}
        </div>
      </div>
    </div>
  );
};

export default AccordionTab;
