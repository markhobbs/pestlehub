/* dashboard/Sections.js */
"use client"
import React, { useContext } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import Heading from "@/components/Heading";
import { NoBookmarks, NoCreations } from "@/components/Snippets";
import { ProfileContext } from '@/ContextProvider/ProfileProvider';
import { DishContext } from  '@/ContextProvider/DishProvider';
import config from '@/data/config.json';
import dictionary from '@/data/dictionary.json';

interface ProfileInterface {
  offset: number;
  setOffset: any;
  setStale: any;
  profile: {
    token?: string;
    username?: string;
  }
}
interface PropsInterface {
  data: {
    bookmarks: [{ pID: string; item: string; title: string; }]; 
    creations: [{ pID: string; item: string; title: string; }];
    bookmarks_count: number;
    creations_count: number;
  }
}

const Sections = ({data}: PropsInterface) => {
  const router = useRouter();
  const {profile} = useContext(ProfileContext) as unknown as ProfileInterface;
  const {setOffset,setStale} = useContext(DishContext) as unknown as ProfileInterface;
  const {token} = profile || {};
  const {bookmarks,bookmarks_count,creations,creations_count} = data || {};
  const api = `${process.env.NEXT_PUBLIC_API_URI || config.api}`;
  const apiItemDelete = `${api}/dishes/${profile.username}`;
  const limit = config.creationDashboardLimit;
  
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
            setStale(true);
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
  
  const DashBoardLinks = () => {
    return <p className="mb-2 mt-2">Create a new dish using <Link 
      className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
      href={{pathname: "/" }}>DishBuilder</Link>.<br />
      Or try viewing our <Link className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
      href={{pathname: "/pages/dish/gguvjquhzxtqyelwd2zhaa" }}>
      Example</Link> for inspiration.
    </p>
  }

  const OffsetNav = () => {
    let result = []
    const page_count = Math.ceil(creations_count/limit);
    for (let i = 0; i < page_count; i++) {
      result.push(
        <button
          key={i} 
          className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
          onClick={() => {
            setOffset(((i-1)*limit)+limit);
            setStale(true);
          }}> 
          [ {i+1} ] 
        </button>
      );
    }
    return result;
  }
  
  return <>
    <Heading Tag="h3" title={`${bookmarks_count} ${dictionary.config.bookmarks}`} />
    {bookmarks && bookmarks.length ? <ul 
      className="list-disc mb-4 mt-4 pl-6" 
      role="list">
      {bookmarks.map((item, index) => <li key={index}>
        <Link
          className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
          href={{pathname: `/pages/dish/${item.pID}` }}>
          {item.title}
        </Link>
      </li>)}
    </ul> : <NoBookmarks />}

    <Heading 
      Tag="h3" 
      title={`${creations_count} ${dictionary.config.creations}`} />

    {creations_count > limit && <OffsetNav />}

    {creations && creations.length ? <ul 
      className="list-disc mb-4 mt-4 pl-6" 
      role="list">
      {creations.map((item, index) => <li key={index}>
        <Link
          className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
          href={{pathname: `/pages/dish/${item.pID}`}}>
          {item.title}
        </Link> <ButtonDeleteItem item={item.pID} />
    </li>)
    }</ul> : <NoCreations />}
    <DashBoardLinks />
  </>
};

Sections.displayName = 'Sections';
export default Sections;

