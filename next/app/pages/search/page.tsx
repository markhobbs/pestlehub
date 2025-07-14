/* Search.js */

import React from "react";
import Heading from "@/components/Heading";
import SearchList from '@/components/SearchList';

const Search = () => { 
    return <main className="dark:text-white">
      <Heading Tag="h2" title="Search" />
      <SearchList />
  </main>};

export default Search;