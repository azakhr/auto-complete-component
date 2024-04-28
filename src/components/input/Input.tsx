import React, { ChangeEventHandler } from 'react';

import './Input.css';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<Props> = ({ value, onChange }) => {
  return <input className="input" type="text" value={value} onChange={onChange} />;
};
