import { FC, PropsWithChildren } from 'react';
import { Layout } from '../../components/Layout/layout';
import { UserProvider } from '../../providers/user/index';
import { FavoriteProvider } from '../../providers/favorite/index';
import { getUser } from '../../services/get-user';

const App: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <FavoriteProvider>
      <UserProvider user={data ?? null}>
        <Layout>{children}</Layout>
      </UserProvider>
    </FavoriteProvider>
  );
};

export default App;