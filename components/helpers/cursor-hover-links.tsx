import React, {FC, ReactChild} from 'react';
import useStore from 'state/store';

interface CursorLinkProps {
  children: ReactChild;
}

const CursorLink: FC<CursorLinkProps> = ({children}) => {
  const {showHoveredCursor, hideHoveredCursor} = useStore();

  return (
    <a
      onClick={hideHoveredCursor}
      onMouseEnter={showHoveredCursor}
      onMouseLeave={hideHoveredCursor}
    >
      {children}
    </a>
  );
};

export default CursorLink;
