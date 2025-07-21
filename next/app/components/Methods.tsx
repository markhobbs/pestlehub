import React from "react";
import {NoMethods} from "@/components/Snippets";

interface Method {
  heading: string;
  body: string;
}
interface Dish {
  methods?: Method[];
}
interface MethodsProps {
  dish: Dish;
}

const Methods: React.FC<MethodsProps> = ({ dish }) => {
  const methods = dish.methods || {};
  return Array.isArray(methods) &&  methods.length ? <ul 
      className="list-disc mb-4 mt-4 pl-6" 
      role="list">
      {methods.map((method, index) => <li key={index}>
        <strong>{method.heading}</strong> : {method.body}
      </li>)}
    </ul> : <NoMethods />
  };

Methods.displayName = "Methods";
export default Methods;