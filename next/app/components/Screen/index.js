// Screen/index.js
"use client"
import React, {useEffect, useState} from "react";
import SaveButton from "@/components/SaveButton";
import MethodSection from "@/components/Screen/MethodSection";
import ContentSection from "@/components/Screen/ContentSection";
import {headers} from "@/utils/headers";

const Screen = (id) => {
  const [item, setItem ] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const dishUrl = `${process.env.NEXT_PUBLIC_API_URI}/dish/${id.id}`;

  useEffect(() => {
    if (!isLoading) return;
    const handleGetDish = async () => {
      try {
        const response = await fetch(dishUrl, {method: 'GET', headers: headers});
        const data = await response.json();
        if(data) { 
          setItem(data) ;
        }
      } catch (error) {
        console.error('Error fetching search', error);
      }
    };
    handleGetDish();
    setIsLoading(false);
  }, [dishUrl, isLoading, setIsLoading, setItem]);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  
  return item && <section>
    <ContentSection items={item} />
    <MethodSection 
      items={item} 
      activeIndex={activeIndex} 
      handleAccordionClick={handleAccordionClick} />
    <SaveButton table={item?.item?.category || ''} />
  </section>
};

Screen.displayName = 'Screen';
export default Screen;