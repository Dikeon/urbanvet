import React from 'react';

const SmallLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 70" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      aria-label="UrbanVet Logo"
    >
      <path 
        d="
          M 10 50
          L 20 50
          L 25 40
          L 30 60
          L 35 50
          L 40 50
          C 40 50, 45 20, 65 20
          C 85 20, 90 50, 90 50
          L 92 53
          C 92 53, 93 45, 105 45
          C 117 45, 118 53, 118 53
          L 120 50
          L 125 50
          L 130 60
          L 135 40
          L 140 50
          L 150 50
          L 151 50
          L 151 20
          L 159 20
          L 159 50
          L 155 50
          L 165 50
          L 162 45
          L 168 45
          L 165 42
          L 171 42
          L 168 50
          L 172 50
          L 174 50
          L 176 60
          L 181 40
          L 186 50
          L 196 50
        " 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
       <circle cx="155" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
};

export default SmallLogo;
