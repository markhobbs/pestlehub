// Measure.tsx
import React from "react";
import Heading from "@/components/Heading";
import units from "@/data/units.json";

const Measure: React.FC = () => { 
    return <main className="dark:text-white">
        <Heading Tag="h2" title="Measures" />
        <ul 
            className="mb-4 mt-4" 
            role="list">
            {units.map((unit, index) => <li key={unit.index}>
                {index !== 0 && <><sup>{unit.code}</sup> <span>{unit.name}</span></>}
            </li>)}
        </ul>
    </main>
  };

export default Measure;