// AccordionSection.js
import React from "react";
import Accordion from "@/components/Accordion";

interface MethodSectionProps {
  items?: {
    item: {
      methods : [{
        index: number;
        pID: string;
        body: string;
        heading: string;
      }]
    }
  };
  activeIndex: number;
  handleAccordionClick: (index: number) => void;
}

const MethodSection: React.FC<MethodSectionProps> = ({ items, activeIndex, handleAccordionClick }) => {
  const methods = items && items.item.methods;

  return methods && <ul>
    {methods.map((item, index) => <Accordion
      key={index}
      activeIndex={activeIndex}
      pID={item.pID}
      content={item.body}
      index={index}
      onAccordionClick={handleAccordionClick}
      title={item.heading} />)}
  </ul>
}
  
MethodSection.displayName = 'MethodSection';
export default MethodSection;