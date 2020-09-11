import Link from 'next/link';
import styled from 'styled-components';
import Button from 'components/button';
import {PageLayout} from 'styles/layout';
import {Layout404} from 'styles/pages/404';

const BackHomeBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Custom404 = () => {
  return (
    <PageLayout>
      <Layout404>
        <h2>Oh dang!</h2>
        <p>Looks like we couldn't find this page...</p>
        <Link href="/">
          <BackHomeBtn>
            <Button text="Back home" standardBtn />
          </BackHomeBtn>
        </Link>
      </Layout404>
    </PageLayout>
  );
};

export default Custom404;
