import React from 'react';

enum menuDialogSize {
  big,
  small,
  mobile,
  loading,
}

type withMenuOuterProps = {
  size: menuDialogSize;
};

const WithMenuOuter: React.FC<withMenuOuterProps> = ({children, size}) => {
  if (size === menuDialogSize.loading) {
    return <div className="menuouter menuouterloading">{children}</div>;
  }
  return <div className="menuouter">{children}</div>;
};

export default WithMenuOuter;
