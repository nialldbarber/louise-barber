import {NextPage} from 'next';
import CustomHead from 'components/custom-head';

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="Home" />
      <div>
        <h1>About page</h1>
      </div>
    </>
  );
};

export default About;
