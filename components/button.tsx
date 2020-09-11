import React, {FC, ReactChild} from 'react';
import {Btn} from 'styles/components/button';

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
  return (
    <Btn
      type={type ?? 'button'}
      className={`${className} ${standardBtn ? 'standard' : ''}`}
      aria-pressed={toggledState}
      aria-expanded={toggledState}
      onClick={action}
    >
      {text || ''}
      {children || ''}
    </Btn>
  );
};

export default Button;
