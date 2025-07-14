// Providers.tsx
"use client";
import {ContextProvider} from "@/ContextProvider/Provider";
import {useState, useEffect} from "react";

interface ProvidersProps {
  children?: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; 
  }

  return (
      <ContextProvider>{children}</ContextProvider>
  );
}