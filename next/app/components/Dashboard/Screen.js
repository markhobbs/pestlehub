// DashboardSections.tsx
"use client"

import {useEffect, useState, useContext} from "react";
import {useRouter} from "next/navigation";
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import {DishContext} from '@/ContextProvider/DishProvider';
import dictionary from '@/data/dictionary.json';
import Button from "@/components/Button";
import Sections from "@/components/Dashboard/Sections";
import ListPending from "@/components/Lists/ListPending";
import {NoUserAccount, Inspiration} from "@/components/Snippets";

const Screen = () => {
  const router = useRouter();
  const {profile} = useContext(ProfileContext);
  const {dishes, setStale, setDishes, isStale} = useContext(DishContext);
  const [userData, setUserData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState([]);
  const {username, token} = profile || {};
  const rootEndpoint = `${process.env.NEXT_PUBLIC_API_URI}`;
  const getDishesEndpoint = `${rootEndpoint}/dish/user/${username}`;
  const saveDishesEndpoint = `${rootEndpoint}/dishes`;
  
  useEffect(() => {
    if(!profile) {
      router.push('/login');
    } else {
      setStale(true);
    }
  }, [profile, router, setStale]);

  useEffect(() => { 
   const handleSaveDish = async (dish) => {
      try {
        fetch(`${saveDishesEndpoint}`, {
          method: "POST", 
          headers: {
              'Authorization' : 'Bearer ' + token,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(dish)})
          .then((response) => {
            if (!response.ok) {
              console.log(`${response.statusText}`);
            }
            return response.json();
          })
          .then(() => setStale(true))
          .then((data) => setResponse((prevResponse) => [...prevResponse, data]))
          .then(() => setDishes([]))
          .then(() => setSubmitted(true))
          .catch((error) => {
            console.log(` ${error.message}`);
          });
      } catch (error) {
        console.error('Error fetching search', error);
      }
    };
    if (!submitted && profile && dishes.length) {
        dishes.forEach(dish => handleSaveDish({ "dishes" : [dish] }));
    }
  }, [saveDishesEndpoint, dishes, profile, setStale, setDishes, setSubmitted, submitted, token, username]);

  useEffect(() => {
    if (profile && profile.username && isStale) {
      const getData  = async (getDishesEndpoint) => {
        fetch(getDishesEndpoint, { 
          method: "GET", 
          headers: {
            'Authorization' : 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
        .then((response) => {
          if (!response.ok) {
            console.log(`${response.statusText}`);
          }
          return response.json();
        })
        .then((json) => setUserData(json.user))
        .then(() => setStale(false))
        .catch((error) => {
          console.log(` ${error.message}`);
        });
      };
      getData(getDishesEndpoint);
    }
  }, [username, token, getDishesEndpoint, isStale, setStale, setUserData, profile]);
  
  const LogOutButton = () => {
    return <Button
      action="handleLogout"
      addClasses="cursor-pointer rounded-md bg-red-700 mt-4 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600 disabled:bg-stone-50"
      label={dictionary.button.logout}
      disabled={false}
      id="logoutButton"
      table="" />}  

  return (profile && profile.username) 
    ? <>
        {response.length > 0 && <p>{response}</p>}
        <Sections data={userData} />
        <ListPending dishes={dishes} />
        <LogOutButton /> 
        <Inspiration />
      </>
    : <NoUserAccount />};

Screen.displayName = 'Screen';
export default Screen;