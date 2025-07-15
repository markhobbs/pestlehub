// login/page.tsx
import React from "react";
import Account from "@/components/Account";

export default async function Login(props: { params: Promise<{ activate: boolean }> }) {
    const { activate } = await props.params;
    return <main className="dark:text-white">
      <Account 
        journey='Login'
        activate={activate} />
    </main>
}