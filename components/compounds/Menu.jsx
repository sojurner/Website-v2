import MenuItem from '../molecules/MenuItem';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';
import { withRouter } from 'next/router';
import '../../styles/components/_menu.scss';

const listItemStyle = { display: 'flex' };

const LinkFactory = ({ iconProps, typographyProps, ...props }) => {
  return (
    <a {...props}>
      <Icon {...iconProps} size={0.75} />
      <Typography {...typographyProps} />
    </a>
  );
};

const menuList = [
  {
    href: '/',
    children: (
      <LinkFactory
        iconProps={{ iconName: 'Home', size: 0.75 }}
        typographyProps={{ variant: 'p', children: 'Home' }}
        props={{ style: listItemStyle }}
      />
    )
  },
  {
    href: '/about',
    children: (
      <LinkFactory
        iconProps={{ iconName: 'Greeting', size: 0.75 }}
        typographyProps={{ variant: 'p', children: 'About Me' }}
        props={{ style: listItemStyle }}
      />
    )
  },
  {
    href: '/projects',
    children: (
      <LinkFactory
        iconProps={{ iconName: 'Projects', size: 0.75 }}
        typographyProps={{ variant: 'p', children: 'My Work' }}
        props={{ style: listItemStyle }}
      />
    )
  },
  {
    href: '/resume',
    children: (
      <LinkFactory
        iconProps={{ iconName: 'Resume', size: 0.75 }}
        typographyProps={{ variant: 'p', children: 'Resume' }}
        props={{ style: listItemStyle }}
      />
    )
  }
];

const Menu = ({ router, ...props }) => {
  return (
    <ul {...props}>
      {menuList.map(itemProps => {
        return router.pathname !== itemProps.href ? (
          <MenuItem className={`${props.className}__link `} {...itemProps} />
        ) : (
          <li className={`${props.className}__link-active`} {...itemProps} />
        );
      })}
    </ul>
  );
};

const RouterMenu = withRouter(Menu);

export { LinkFactory, RouterMenu as default };
