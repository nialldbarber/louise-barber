import {NextPage} from 'next';
import MainLayout from 'components/layout';

const About: NextPage = () => {
  return (
    <MainLayout title="About">
      <>
        <h2>About page</h2>
        <p>This is the about page.</p>
      </>
    </MainLayout>
  );
};

export default About;
