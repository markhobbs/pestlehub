// SpicePallete.js
import React from "react";
import List from "@/components/List";

interface SpicePalleteProps {
  items: Items;
};

interface Items {
  item: {
    flavours: any;
    origins: any;
  };
};

const Lists: React.FC<SpicePalleteProps> = ({ items }) => {
  const {item} = items;
  return <section>
    <List 
      title="Flavours" 
      items={item.flavours}  />
    <List 
      title="Origins" 
      items={item.origins}  />
  </section>;
};

const SpicePallete: React.FC<SpicePalleteProps> = ({ items }) => {
  return <Lists items={items} />;
};

SpicePallete.displayName = 'SpicePallete';
export default SpicePallete;
