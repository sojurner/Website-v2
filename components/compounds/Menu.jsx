import MenuItem from '../molecules/MenuItem';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';
import { withRouter } from 'next/router';
import '../../styles/components/_menu.scss';

const listItemStyle = { display: 'flex' };
const size = 0.75;
const variant = 'p';

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
        iconProps={{ iconName: 'Home', size }}
        typographyProps={{ variant, children: 'Home' }}
        props={{ style: listItemStyle }}
      />
    )
  },
  {
    href: '/about',
    children: (
      <LinkFactory
        iconProps={{ iconName: 'Greeting', size }}
        typographyProps={{ variant, children: 'About Me' }}
        props={{ style: listItemStyle }}
      />
    )
  },
  {
    href: '/projects',
    children: (
      <LinkFactory
        iconProps={{ iconName: 'Projects', size }}
        typographyProps={{ variant, children: 'My Work' }}
        props={{ style: listItemStyle }}
      />
    )
  },
  {
    href: '/resume',
    children: (
      <LinkFactory
        iconProps={{ iconName: 'Resume', size }}
        typographyProps={{ variant, children: 'Resume' }}
        props={{ style: listItemStyle }}
      />
    )
  }
];

const Menu = ({ router, ...props }) => {
  return (
    <ul {...props}>
      {menuList.map((itemProps, index) => {
        return router.pathname !== itemProps.href ? (
          <MenuItem
            key={`menuitem-${index}`}
            className={`${props.className}__link `}
            {...itemProps}
          />
        ) : (
          <li
            key={`menuitem-${index}`}
            className={`${props.className}__link-active`}
            {...itemProps}
          />
        );
      })}
    </ul>
  );
};

const RouterMenu = withRouter(Menu);

export { LinkFactory, RouterMenu as default };
