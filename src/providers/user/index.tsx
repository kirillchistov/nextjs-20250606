'use client';

import { IUser } from '../../types/index';
import { createContext, FC, PropsWithChildren } from 'react';

interface UserContextType {
  user: IUser | null;
  isAuthorized: boolean;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  isAuthorized: false,
});

interface Props extends PropsWithChildren {
  user: IUser | null;
}

export const UserProvider: FC<Props> = ({ children, user }) => {
  return (
    <UserContext value={{ user, isAuthorized: Boolean(user) }}>
      {children}
    </UserContext>
  );
};