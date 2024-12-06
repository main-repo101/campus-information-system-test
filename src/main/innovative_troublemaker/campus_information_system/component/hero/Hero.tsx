import React from 'react';
import { HeroProps } from "@innovative_troublemaker/campus_information_system/model/hero/HeroProps"; 

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  actions,
  overlayOpacity = 'bg-opacity-60',
  className = '',
}) => {
  return (
    <section
      className={`relative h-screen flex items-center justify-center bg-center bg-cover ${className}`}
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
      }}
    >
      {backgroundImageUrl && (
        <div
          className={`absolute inset-0 bg-black ${overlayOpacity}`}
          aria-hidden="true"
        ></div>
      )}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg sm:text-xl mb-6">{subtitle}</p>}
        {actions && <div className="flex justify-center space-x-4">{actions}</div>}
      </div>
    </section>
  );
};

export default Hero;