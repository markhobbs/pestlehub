// StepNav.tsx
"use client"

import React from "react";

const StepNav: React.FC<{ back?: () => void, next?: () => void, title: string }> = ({ back, next, title }) => {
  return <nav className="mt-3 mb-3 md:mb-6 md:mt-6">
    <div className="mt-6">
      {title}
    </div>
    <div className="md:flex mt-2">
      {back && <button 
          className="cursor-pointer rounded-md px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
          onClick={back}>
          { 'Back' }
          </button>} {next && <button className="md:ml-auto cursor-pointer rounded-md px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
          onClick={next}>
          { 'Next' }
        </button>}
    </div>
</nav>}

StepNav.displayName = 'StepNav';
export default StepNav;