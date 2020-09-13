import {NextPage} from 'next';
import {motion} from 'framer-motion';
import MainLayout from 'components/layout';
import CustomHead from 'components/custom-head';
import {PageLayout} from 'styles/layout/index';

const About: NextPage = () => {
  return (
    <MainLayout>
      <>
        <CustomHead title="About" />
        <PageLayout>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 0.1}}}
            exit={{opacity: 0, transition: {delay: 0.1}}}
          >
            <h2>About page</h2>
            <p>This is the about page.</p>
          </motion.div>
        </PageLayout>
      </>
    </MainLayout>
  );
};

export default About;
