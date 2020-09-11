import React, {FC} from 'react';
import {motion} from 'framer-motion';
import useStore from 'state/store';
import Button from 'components/button';

const Path: FC = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

type MenuToggleProps = {
  className: string;
};

const MenuToggle: FC<MenuToggleProps> = ({className}) => {
  const {toggleMenu} = useStore();

  return (
    <Button className={`menu-toggle ${className || ''}`} action={toggleMenu}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          d="M 2 2.5 L 20 2.5"
          variants={{
            closed: {d: 'M 2 2.5 L 20 2.5'},
            open: {d: 'M 3 16.5 L 17 2.5'},
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0},
          }}
          transition={{duration: 0.1}}
        />
        <Path
          d="M 2 16.346 L 20 16.346"
          variants={{
            closed: {d: 'M 2 16.346 L 20 16.346'},
            open: {d: 'M 3 2.5 L 17 16.346'},
          }}
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;
