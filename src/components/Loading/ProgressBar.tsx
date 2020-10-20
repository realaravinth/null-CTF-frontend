import React from 'react';

type progressProps = {
  completed: number;
};

// TODO animation

// TODO animation
const ProgressBar: React.FC<progressProps> = ({completed}) => {
  const bgcolor = '#32b31d';

  const containerStyles = {
    height: 13,
    width: '100%',
    display: 'flex',
  } as React.CSSProperties;

  const fillerBoxStyles = {
    height: '100%',
    width: `10%`,
    border: '0.1px solid',
    borderColor: '#fff',
    textAlign: 'right',
  } as React.CSSProperties;

  const numBoxes = [];
  for (let i = 0; i < 30; i++) {
    numBoxes.push(i);
  }

  const boxes = numBoxes.map(_ => <div style={fillerBoxStyles} />);
  return <div style={containerStyles}>{boxes}</div>;
};

export default ProgressBar;
