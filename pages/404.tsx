import Link from 'next/link';
import styled from 'styled-components';
import MainLayout from 'components/layout';
import Button from 'components/button';
import {Layout404} from 'styles/pages/404';

const BackHomeBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Custom404 = () => {
  return (
    <MainLayout>
      <Layout404>
        <h2>Oh dang!</h2>
        <p>Looks like we couldn't find this page...</p>
        <Link href="/">
          <BackHomeBtn>
            <Button text="Back home" standardBtn />
          </BackHomeBtn>
        </Link>
      </Layout404>
    </MainLayout>
  );
};

export default Custom404;
