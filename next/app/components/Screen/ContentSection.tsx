// ContentSection.tsx
import React from "react";
import Heading from "@/components/Heading";
import DishPallete from "@/components/Screen/DishPallete";
import SpicePallete from "@/components/Screen/SpicePallete";

interface ContentSectionProps {
  items: {
    item: {
      title: string; 
      category: string; 
      flavours: string; 
      origins: string; 
      color: string;
      time_prep?: number | undefined; 
      time_cook?: number | undefined; 
    };
  };
}

const ContentSection: React.FC<ContentSectionProps> = ({ items }) => items.item && <>
    <Heading Tag="h2" title={items.item.title} />
    {items.item.category === "dish" && <DishPallete items={items} /> }
    {items.item.category === "spice" && <SpicePallete items={items} /> }
  </>;

ContentSection.displayName = 'ContentSection';
export default ContentSection;
