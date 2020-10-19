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

export default WithMenuButton;
