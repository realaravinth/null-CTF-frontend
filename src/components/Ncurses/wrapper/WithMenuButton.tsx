import React from 'react';

type withMenuButtonProps = {
  onClick(e: React.MouseEvent): void;
};

const WithMenuButton: React.FunctionComponent<withMenuButtonProps> = ({
  children,
  onClick,
}) => (
  <div className="btn" onClick={onClick}>
    {children}
  </div>
);

export const WithMenuButtonSmall: React.FunctionComponent<withMenuButtonProps> = ({
  children,
  onClick,
}) => (
  <div className="btnSmallOuter">
    <div className="btnSmall" onClick={onClick}>
      {children}
    </div>
  </div>
);

export default WithMenuButton;
