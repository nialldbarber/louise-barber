import React, {FC, ReactChild} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Header from 'components/header';
import Footer from 'components/footer';

type MainLayoutProps = {children: ReactChild};

const Cursor = styled(motion.div)`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  z-index: 10;
  top: 0;
  /* background-color: #e7dede; */
  border: 1px solid #111;
  border-radius: 100%;
  pointer-events: none;
`;

const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      {/* <Cursor
        animate={{x: x - 15, y: y - 15}}
        transition={{ease: 'linear', duration: 0.3}}
      /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
