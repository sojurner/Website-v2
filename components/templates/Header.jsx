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
      </div>
    </header>
  );
};

export { Header as default };
