import React, {FC, ReactChild} from 'react';
import useStore from 'state/store';
import useMousePosition from 'hooks/useMousePosition';
import CustomHead from 'components/custom-head';
import Header from 'components/header';
import Footer from 'components/footer';
import {PageLayout} from 'styles/layout';
import {Cursor} from 'styles/components/cursor';

interface MainLayoutProps {
  title?: string;
  children: ReactChild;
}

const MainLayout: FC<MainLayoutProps> = ({title, children}) => {
  const {isHovered, isMenuOpen} = useStore();
  const {x, y} = useMousePosition();

  return (
    <>
      <Header />
      <Cursor
        animate={{
          x: (x ?? -100) - 16,
          y: (y ?? -100) - 16,
          scale: isHovered ? 1.2 : 0.3,
          opacity: isHovered ? 0.8 : 0 ?? 0,
        }}
        transition={{ease: 'linear', duration: 0.2, times: [0, 0.2, 1]}}
        mode={isMenuOpen}
      />
      <main>
        <CustomHead title={`Art | ${title}`} />
        <PageLayout
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {delay: 0.1}}}
          exit={{opacity: 0, transition: {delay: 0.1}}}
        >
          {children}
        </PageLayout>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
