// Dashboard.tsx
import React from "react";
import Heading from "@/components/Heading";
import DashboardPallete from "@/components/Screen/DashboardPallete";

const Dashboard: React.FC = () => {
  return <main className="dark:text-white">
      <Heading Tag="h2" title="Dashboard" />
      <DashboardPallete />
    </main>};

export default Dashboard;
