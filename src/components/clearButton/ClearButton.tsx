import React from 'react';

import './ClearButton.css';
interface Props {
  onClick: (value: string) => void;
}

export const ClearButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="clearButton" onClick={() => onClick('')}>
      Clear
    </button>
  );
};
