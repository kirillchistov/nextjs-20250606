import { FC, PropsWithChildren } from 'react';
import { Layout } from '../../components/Layout/layout';
import { UserProvider } from '../../providers/user/index';
import { getUser } from '../../services/get-user';

const App: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <UserProvider user={data ?? null}>
      <Layout>{children}</Layout>
    </UserProvider>
  );
};

export default App;