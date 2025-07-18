// SpicePallete.js
import React from "react";
import List from "@/components/List";

interface SpicePalleteProps {
  items? : any;
}

const SpicePallete: React.FC<SpicePalleteProps> = ({ items }) => {
  return (
    <>
      <List title="Flavours" items={items.item.flavours}  />
      <List title="Origins" items={items.item.origins}  />
    </>
  );
}

SpicePallete.displayName = 'SpicePallete';
export default SpicePallete;
