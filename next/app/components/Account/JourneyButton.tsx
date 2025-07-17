// Button.tsx
import React from "react";

interface JourneyButtonProps {
  journey?: string;
  disabled?: boolean;
  handleEvent: React.MouseEventHandler<HTMLButtonElement>; 
}

const JourneyButton: React.FC<JourneyButtonProps> = ({ journey, disabled, handleEvent }) => {
  return <button
    className="cursor-pointer rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:bg-stone-500"
    value={journey}
    name={journey}
    id={journey}
    disabled={disabled}
    onClick={handleEvent}>
    {journey}
  </button>}

JourneyButton.displayName = 'JourneyButton';
export default JourneyButton;