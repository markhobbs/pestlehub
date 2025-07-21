// Heading.tsx
import React from 'react';

interface HeaderProps {
    title: string;
    Tag: keyof React.JSX.IntrinsicElements;
}

export default function Heading(props: HeaderProps) {
    const { title, Tag } = props;
    let addClass;
    switch(Tag) {
        case "h1":
            addClass = "mb-2 md:mb-5 text-4xl md:text-5xl dark:text-white";
            break;
        case "h2":
            addClass = "mb-2 md:mb-5 text-3xl md:text-4xl";
            break;
        case "h3":
            addClass = "mb-2 mt-2 md:mb-2 text-xl md:text-2xl md:mt-2";
            break;
        case "h4":
            addClass = "mb-1 mt-2 md:text-l";
            break;
        default:
            addClass = "mb-1 mt-2 md:text-l";
            break;
    } return <Tag className={`${addClass} font-bold`}>{title}</Tag>}