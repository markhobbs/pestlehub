// DashboardPallete.tsx
"use client"

import React, {useEffect, useState, useContext} from "react";
import {useRouter} from "next/navigation";
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import {DishContext} from '@/ContextProvider/DishProvider';
import dictionary from '@/data/dictionary.json';
import Button from "@/components/Button";
import Dashboard from "@/components/Dashboard";
import ListPending from "@/components/Lists/ListPending";
import {NoUserAccount, Inspiration} from "@/components/Snippets";

const DashboardPallete = () => {
  const router = useRouter();
  const {profile} = useContext(ProfileContext);
  const {pendingDishes, setDashboardDataStale, setPendingDishes, isDashboardDataStale} = useContext(DishContext);
  const [userData, setUserData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState([]);
  const {username, token} = profile || {};
  const rootEndpoint = `${process.env.NEXT_PUBLIC_API_URI}`;
  const getDishesEndpoint = `${rootEndpoint}/dish/user/${username}`;
  const createDishesEndpoint = `${rootEndpoint}/dishes`;
  
  useEffect(() => {
    if(!profile) {
      router.push('/login');
    } else {
      setDashboardDataStale(true);
    }
  }, [profile, router, setDashboardDataStale]);

  useEffect(() => { 
   const handlePendingDish = async (dish) => {
      try {
        fetch(`${createDishesEndpoint}`, {
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
          .then(() => setDashboardDataStale(true))
          .then((data) => setResponse((prevResponse) => [...prevResponse, data]))
          .then(() => setPendingDishes([]))
          .then(() => setSubmitted(true))
          .catch((error) => {
            console.log(` ${error.message}`);
          });
      } catch (error) {
        console.error('Error fetching search', error);
      }
    };
    if (!submitted && profile && pendingDishes.length) {
        pendingDishes.forEach(dish => handlePendingDish({ "dishes" : [dish] }));
    }
  }, [createDishesEndpoint, pendingDishes, profile, setDashboardDataStale, setPendingDishes, setSubmitted, submitted, token, username ]);

  useEffect(() => {
    if (profile && profile.username && isDashboardDataStale) {
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
        .then(() => setDashboardDataStale(false))
        .catch((error) => {
          console.log(` ${error.message}`);
        });
      };
      getData(getDishesEndpoint);
    }
  }, [username, token, getDishesEndpoint, isDashboardDataStale, setDashboardDataStale, setUserData, profile]);
  
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
        <Dashboard data={userData} />
        <ListPending dishes={pendingDishes} />
        <LogOutButton /> 
        <Inspiration />
      </>
    : <NoUserAccount />};

DashboardPallete.displayName = 'DashboardPallete';
export default DashboardPallete;