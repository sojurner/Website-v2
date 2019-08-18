import { useState } from 'react';
import Typography from '../atoms/Typography';
import '../../styles/components/_header.scss';

import Icon from '../atoms/Icon';

const logoName = '__logoName';

const Header = ({ className, handleToggle, ...props }) => {
  return (
    <header className={`${className}`} {...props}>
      <div className={`${className}${logoName}`}>
        <Icon
          onClick={handleToggle}
          className={`${className}${logoName}-menu `}
          iconName={'Menu'}
          size={1.1}
        />
        <img
          src={
            'https://res.cloudinary.com/paulkim/image/upload/v1552394091/images/misc/Paul-kim-logo.png'
          }
          height={25}
          width={85}
          style={{
            filter: 'brightness(0.5) contrast(1)'
          }}
          alt="paul kim logo"
        />
      </div>
    </header>
  );
};

export { Header as default };
