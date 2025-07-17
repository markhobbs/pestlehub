/* Dashboard.js */

import React, { useContext } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { ProfileContext } from '@/ContextProvider/ProfileProvider';
import { DishContext } from  '@/ContextProvider/DishProvider';
import dictionary from '@/data/dictionary.json';
import Heading from "@/components/Heading";

interface ProfileInterface {
  setDashboardDataStale: any;
  profile: {
    token?: string;
    username?: string;
  }
}
interface PropsInterface {
  data: {
    bookmarks: [{ pID: string; item: string; title: string; }]; 
    creations: [{ pID: string; item: string; title: string; }];
  }
}

const Dashboard = ({data}: PropsInterface) => {
  const router = useRouter();
  const { profile } = useContext(ProfileContext) as unknown as ProfileInterface;
  const { setDashboardDataStale } = useContext(DishContext) as unknown as ProfileInterface;
  const apiItemDelete = `${process.env.NEXT_PUBLIC_API_URI}/dish/user/${profile.username}`;
  const {token} = profile || {};
  
  const handleDeleteDish = (item:{pid:{item:string}}) => {
    if (window.confirm("You are about to remove a Dish! Are you sure?") === true) {
      (async () => {
        const string = item.pid.item;
        await fetch(`${apiItemDelete}/${string}`, {
          method: "DELETE", 
          headers: {
              'Authorization' : 'Bearer ' + token,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }})
          .then(() => {
            setDashboardDataStale(true);
            router.push("/pages/dashboard");
          })
          .catch((error) => {
            console.log(`${error.message}`);
          });
      })();
    }
  };

  const ButtonDeleteItem = (pid:any) => {
    return <button
      className="text-red-600 hover:text-red-900 pl-1 pr-1 font-semibold"
      onClick={() => handleDeleteDish({pid})}>x</button>
  };
  
  return <>
    <Heading Tag="h3" title={dictionary.config.bookmarks} />
      {data['bookmarks'] && data['bookmarks'].length ? <ul 
        className="list-disc mb-4 mt-4 pl-6" 
        role="list">
        {data.bookmarks.map((item, index) => <li key={index}>
          <Link
            className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
            href={{pathname: `/pages/dish/${item.pID}` }}>
            {item.title}
          </Link>
      </li>)
    }</ul> : <p className="mb-4">No Bookmarks</p>}

    <Heading Tag="h3" title={dictionary.config.creations} />
    {data['creations'] && data['creations'].length ? <ul 
      className="list-disc mb-4 mt-4 pl-6" 
      role="list">
      {data.creations.map((item, index) => <li key={index}>
        <Link
          className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
          href={{pathname: `/pages/dish/${item.pID}`}}>
          {item.title}
        </Link> <ButtonDeleteItem item={item.pID} />
    </li>)
    }</ul> : "No Creations"}

    <DashBoardLinks />
  </>
};

const DashBoardLinks = () => {
  return <p className="mb-2 mt-2">Create a new dish using <Link 
    className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
    href={{pathname: "/" }}>DishBuilder</Link>.<br />
    Or try viewing our <Link className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
    href={{pathname: "/pages/dish/gguvjquhzxtqyelwd2zhaa" }}>
    Example</Link> for inspiration.
  </p>
}

Dashboard.displayName = 'Dashboard';
export default Dashboard;

