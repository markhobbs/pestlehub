// DashboardSections.tsx
"use client"
import {useEffect, useContext} from "react";
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import {DishContext} from '@/ContextProvider/DishProvider';
import dictionary from '@/data/dictionary.json';
import Button from "@/components/Button";
import Sections from "@/components/Dashboard/Sections";
import Pending from "@/components/Pending";
import {NoUserAccount, Inspiration} from "@/components/Snippets";
import config from '@/data/config.json';

const Screen = () => {
  const {profile} = useContext(ProfileContext);
  const {dashboard, dishes, setStale, setDashboard, setDishes, isStale} = useContext(DishContext);
  const {username, token} = profile || {};
  const api = `${process.env.NEXT_PUBLIC_API_URI || config.api}`;
  const getDishesEndpoint = `${api}/dish/user/${username}`;
  const saveDishesEndpoint = `${api}/dishes`;
  // const [response, setResponse] = useState([]);

  useEffect(() => { 
    if (username && isStale) {
      const setData = async (dish) => {
        try {
          // Attach Author to Dish
          dish.dishes[0].dish.publishedby = username;
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
            //.then((data) => setResponse((prevResponse) => [...prevResponse, data]))
            .then(() => setDishes([]))
            .catch((error) => {
              console.log(` ${error.message}`);
            });
        } catch (error) {
          console.error('Error fetching search', error);
        }
      };
      setTimeout(function () {dishes.forEach(dish => setData({ "dishes" : [dish] }))}, 2000);
    } 
  }, [saveDishesEndpoint, dishes, setStale, setDishes, token, username]);

  useEffect(() => {
    if (username && isStale) {
      const getData  = async (getDishesEndpoint) => {
        fetch(getDishesEndpoint, { method: "GET", headers: {
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
        .then((json) => setDashboard(json.user))
        .then(() => setStale(false))
        .catch((error) => {
          console.log(` ${error.message}`);
        });
      };
      getData(getDishesEndpoint);
    } 
  }, [username, token, getDishesEndpoint, isStale, setStale, setDashboard]);
  
  const LogOutButton = () => {
    return <Button
      action="handleLogout"
      addClasses="cursor-pointer rounded-md bg-red-700 mt-4 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600 disabled:bg-stone-50"
      label={dictionary.button.logout}
      disabled={false}
      id="logoutButton"
      table="" />}  

  const AuthenticatedScreen = () => {
    return <>
      {/*response.length > 0 && <p>{JSON.stringify(response)}</p>*/}
      <Sections data={dashboard} />
      <Pending dishes={dishes} />
      <LogOutButton /> 
      <Inspiration />
    </>
  }

  const NonAuthenticatedScreen = () => {
    return <>
      <Pending dishes={dishes} />
      <NoUserAccount />
    </>
  }

  return (profile && profile.username) ? <AuthenticatedScreen /> : <NonAuthenticatedScreen />
};

Screen.displayName = 'Screen';
export default Screen;