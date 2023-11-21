import React from 'react';

interface BannerProps {
  img: string;
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  return (
    <div
      style={{
        padding: '0 3.5rem'
      }}
    >
      <img
        style={{
          borderRadius: '10px',
          height: '120px',
          width: '265px',
          boxShadow: 'rgba(0, 0, 0, 0.45) 0px 2px 6px 1px'
        }}
        src={img}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;
