import React, {FC, ReactChild} from 'react';

interface ButtonProps {
  text?: string | number;
  type?: 'submit' | 'button';
  className?: string;
  toggledState?: boolean;
  action?: () => void;
  children?: ReactChild;
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  className,
  toggledState = false,
  action,
  children,
}) => {
  return (
    <>
      <button
        type={type ?? 'button'}
        className={className}
        aria-pressed={toggledState}
        aria-expanded={toggledState}
        onClick={action}
      >
        {text || ''}
        {children || ''}
      </button>
    </>
  );
};

export default Button;
