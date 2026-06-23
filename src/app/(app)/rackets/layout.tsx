import { FC, PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  modal: ReactNode;
}

const Layout: FC<Props> = async ({ children, modal }) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default Layout;