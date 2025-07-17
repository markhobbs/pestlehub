// Dashboard.tsx
import React from "react";
import Heading from "@/components/Heading";
import Screen from "@/components/Dashboard/Screen";

const Dashboard: React.FC = () => {
  return <main className="dark:text-white">
      <Heading Tag="h2" title="Dashboard" />
      <Screen />
    </main>};

export default Dashboard;
