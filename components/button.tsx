import React, {FC, ReactChild, useState} from 'react';
import useStore from 'state/store';
import {Btn} from 'styles/components/button';
import {LoaderSpinner} from 'styles/components/loader';

interface ButtonProps {
  text?: string | number;
  type?: 'submit' | 'button';
  className?: string;
  standardBtn?: boolean;
  toggledState?: boolean;
  action?: () => void;
  children?: ReactChild;
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  className,
  standardBtn,
  toggledState = false,
  action,
  children,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const {showHoveredCursor, hideHoveredCursor} = useStore();

  return (
    <Btn
      type={type ?? 'button'}
      className={`${className} ${standardBtn ? 'standard' : ''}`}
      aria-pressed={toggledState}
      aria-expanded={toggledState}
      onClick={() => {
        setActive(!active);
        action && action();
      }}
      onMouseEnter={showHoveredCursor}
      onMouseLeave={hideHoveredCursor}
    >
      <span className={`${active ? 'active' : ''}`}>{text || ''}</span>
      {children || ''}
      {active && standardBtn ? <LoaderSpinner className="loader" /> : null}
    </Btn>
  );
};

export default Button;
