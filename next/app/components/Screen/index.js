// Screen/index.js
"use client"
import React, {useEffect, useState} from "react";
import SaveButton from "@/components/SaveButton";
import MethodSection from "@/components/Screen/MethodSection";
import ContentSection from "@/components/Screen/ContentSection";
import config from '@/data/config.json';
import {headers} from "@/utils/headers";

const Screen = (pid) => {
  const [item, setItem ] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const api = `${process.env.NEXT_PUBLIC_API_URI || config.api}`;
  const apiDish = `${api}/dish/${pid.id}`;

  useEffect(() => {
    if (!isLoading) return;
    const handleGetDish = async () => {
      try {
        const response = await fetch(apiDish, {method: 'GET', headers: headers});
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
  }, [apiDish, isLoading, setIsLoading, setItem]);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const Sections = () => <section>
    <ContentSection items={item} />
    <MethodSection 
      items={item} 
      activeIndex={activeIndex} 
      handleAccordionClick={handleAccordionClick} />
    <SaveButton table={item?.item?.category || ''} />
  </section>

  return item && <Sections />
};

Screen.displayName = 'Screen';
export default Screen;