import React from "react";
import {NoCurrentMethods} from "@/components/Snippets";

interface Method {
  heading: string;
  body: string;
}
interface Dish {
  methods?: Method[];
}
interface CurrentMethodsProps {
  dish: Dish;
}

const CurrentMethods: React.FC<CurrentMethodsProps> = ({ dish }) => {
  return <>
      {dish.methods && dish.methods.length ? <ul className="list-disc mb-4 mt-4 pl-6" role="list">
            {dish.methods.map((method, index) => <li key={index}>
              <strong>{method.heading}</strong> : {method.body}
            </li>)}
        </ul> : <NoCurrentMethods />}
    </>
  };

CurrentMethods.displayName = "CurrentMethods";
export default CurrentMethods;