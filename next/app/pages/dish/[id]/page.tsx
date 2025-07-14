// dish/page.tsx
import React from "react";
import Screen from "@/components/Screen"

export default async function Dish(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    return <main className="md:flex dark:text-white">
        <Screen id={id} />
    </main>}