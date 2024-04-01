import React, { useState } from 'react';
import './MyButton.css';

interface MyButtonProps {
  onClick?: () => void;
  hoverColor?: string;
  hitboxPadding?: string;
  children?: React.ReactNode;  // Добавляем children в тип
}

const MyButton: React.FC<MyButtonProps> = ({
  onClick,
  hoverColor = 'blue',
  hitboxPadding = '10px 20px',
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle: React.CSSProperties = {
    padding: hitboxPadding,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  if (isHovered) {
    buttonStyle.backgroundColor = hoverColor;
    buttonStyle.color = 'white';
  }

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default MyButton;
