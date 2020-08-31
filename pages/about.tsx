import {NextPage} from 'next';
import {motion} from 'framer-motion';
import CustomHead from 'components/custom-head';
import {PageLayout} from 'styles/layout/index';

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />
      <PageLayout>
        <motion.div      
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>About page</h2>
        </motion.div>
      </PageLayout>
    </>
  );
};

export default About;
