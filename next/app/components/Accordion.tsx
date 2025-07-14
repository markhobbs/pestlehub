// Accordion.js
'use client'

import React from "react";
import Heading from "@/components/Heading";
import dictionary from "@/data/dictionary.json";

interface AccordionProps {
  activeIndex: number;
  pID: string;
  content: string;
  dictionary?: string;
  index: number;
  isActive?: boolean;
  title: string;
  onAccordionClick: (index: number) => void;
}
interface AccordionTitleProps {
  pID: string;
  isActive: boolean;
  title: string;
  onAccordionClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}
interface AccordionContentProps {
  content: string;
  dictionary: object;
}

const Accordion: React.FC<AccordionProps> = ({activeIndex, pID, content, index, onAccordionClick, title}) => {
  const isActive = index === activeIndex;
  return (
    <li key={title}>
      <AccordionTitle
        title={title}
        pID={pID}
        isActive={isActive}
        onAccordionClick={() => onAccordionClick(index)} />
      {isActive && <AccordionContent 
        content={content}
        dictionary={dictionary} />}
    </li>
  );
};

const AccordionTitle: React.FC<AccordionTitleProps> = ({title, pID, isActive, onAccordionClick}) => (
  <span
    data-attrib-id={pID} 
    onClick={onAccordionClick}>
    <Heading Tag="h4" title={`${title} ${isActive ? "-" : "+"}`} />
  </span> 
);

const AccordionContent: React.FC<AccordionContentProps> = ({ content }) => <p className="mb-2">{content}</p>;

Accordion.displayName = 'Accordion';
export default Accordion;