import React from 'react';

interface HeaderUnderlineProps {
  className?: string;
}

const HeaderUnderline: React.FC<HeaderUnderlineProps> = ({ className }) => {
  return (
    <div
      className={`relative ${className} items-center flex flex-col justify-center custom-sm:hidden`}
      style={{
        backgroundColor: '#26b9b97e',
        height: '0.02mm',
        marginLeft: '235px',
        marginTop: '-25px',
        marginBottom: '20px',
        width: '35vw',
        content: '""',
      }}
    />
  );
};

export default HeaderUnderline;
