import React, {FC, ReactChild} from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

interface MainLayoutProps {
  children: ReactChild;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
