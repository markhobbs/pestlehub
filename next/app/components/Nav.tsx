// Nav.tsx
"use client"

import React, {useContext} from "react";
import Link from "next/link";
import StatusBadge from '@/components/StatusBadge';
import {ProfileContext} from '@/ContextProvider/ProfileProvider';

interface Profile {
  profile : {
    username?: string;
    token?: string;
    status?: string;
  }
}

const Nav: React.FC = () => {
  return <nav className="mb-1">
    <NavLinks />
  </nav>};

const NavLinks: React.FC = () => {
  const { profile } = useContext(ProfileContext) as unknown as Profile;
  const addClass = "text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline me-2 md:me-4";
  return <ul className="flex flex-wrap items-center text-gray-900 mb-6">
    <li>
      <Link 
        className={addClass} 
        href={{pathname: "/" }}
        title="Create a dish with dishbuilder">
        DishBuilder</Link>
    </li>
    <li>
      <Link 
        className={addClass} 
        href={{pathname: "/pages/about" }}
        title="Read about us">
        About</Link>
    </li>
    <li>
      <Link 
        className={addClass} 
        href={{pathname: "/pages/search" }}
        title="Search our spices">
        Search</Link>
    </li>
    <li className="pr-1">
      <StatusBadge />
    </li>
    {profile && profile.username && <li>
      <Link
        className="text-yellow-500 hover:text-yellow-400 hover:underline"  
        href={{pathname: "/pages/dashboard" }}
        title="Go to your dashboard">
        Dashboard</Link>
    </li>}
    {!profile && <li className="dark:text-white">
      <Link 
        className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
        href={{pathname: "/login" }}
        title="Login to Dashboard">
        Login</Link> | <Link 
          className={addClass} 
          href={{pathname: "/pages/signup" }}
          title="Signup to PestleHub">
          Signup</Link>
    </li>}

</ul>};

Nav.displayName = 'Nav';
export default Nav;
