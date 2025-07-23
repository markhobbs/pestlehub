// Screen/index.tsx
"use client"
import React,{useState} from "react";
import Boomark from "@/components/Boomark";
import MethodSection from "@/components/Screen/MethodSection";
import ContentSection from "@/components/Screen/ContentSection";
import config from '@/data/config.json';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Screen(pid : {id: string}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const apiRoot = process.env.NEXT_PUBLIC_API_URI || config.api || {};
  const {data, error, isLoading} = useSWR(`${apiRoot}/dishes/dish/${pid.id}`, fetcher);
  
  const handleActiveIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <section role="section">
      <ContentSection items={data} />
      <MethodSection 
        activeIndex={activeIndex} 
        handleActiveIndex={handleActiveIndex} 
        items={data} />
      <Boomark table={data.item.category} />
    </section>
  );
};