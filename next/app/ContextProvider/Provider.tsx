'use client';

import { ProfileProvider } from './ProfileProvider';
import { DishProvider } from './DishProvider';

export const ContextProvider  = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return <ProfileProvider>
        <DishProvider>
          {children}
      </DishProvider>
    </ProfileProvider>
}