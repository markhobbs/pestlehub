// StepNav.tsx
"use client"

import React from "react";

const StepNav: React.FC<{ back?: () => void, next?: () => void, title: string }> = ({ back, next, title }) => {
  return <nav className="mt-3 mb-3 md:mb-6 md:mt-8">
    <hr />
    <div className="mt-2 flex justify-between">
      <div>
        {back && <button 
          className="cursor-pointer rounded-md px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
          onClick={back}>
          { 'Back' }
        </button>}
      </div> 
      <div>
        {title}
      </div>
      <div>
        {next && <button className="md:ml-auto cursor-pointer rounded-md px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
          onClick={next}>
          { 'Next' }
        </button>}
       </div>
    </div>
</nav>}

StepNav.displayName = 'StepNav';
export default StepNav;