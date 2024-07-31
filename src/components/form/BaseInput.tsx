import React from 'react';

interface BaseInputProps {
  value: string;
  type: 'email' | 'password' | 'search' | 'text';
  icon?: JSX.Element;
  // icon?: "search" | "lock" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange: (value: string) => void;
}

const BaseInput: React.FC<BaseInputProps> = (props) => {
  const { onChange } = props;

  return (
    <input
      onChange={(e) => {
        onChange(e);
      }}
    />
  );
};

export default BaseInput;
