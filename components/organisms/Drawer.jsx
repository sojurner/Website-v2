import { createPortal } from 'react-dom';
import Menu from '../compounds/Menu';
import { PortalNode } from '../../utils/hooks';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const drawerClass = 'drawer';
const menuClass = `${drawerClass}__menu`;

const Drawer = ({ open, handleToggle }) => {
  const renderContent = () => {
    return (
      <>
        <div
          className={
            open
              ? `${drawerClass} ${drawerClass}-open`
              : `${drawerClass} ${drawerClass}-close`
          }
        >
          <Icon
            onClick={handleToggle}
            iconName={'Back'}
            size={1.1}
            color={'gray'}
            style={{
              margin: '10px 10px 0 auto',
              cursor: 'pointer'
            }}
          />
          <Typography
            className={`${drawerClass}__title`}
            variant={'h5'}
            children={'Menu'}
          />
          <Menu className={menuClass} />
        </div>
        <style jsx>
          {`
            .${drawerClass} {
              display: flex;
              flex-flow: column nowrap;
              width: 12em;
              background: #fdfdfd;
              position: absolute;
              height: -webkit-fill-available;
              top: 0;
              left: 0;
              transition: 0.2s linear;
              border-right: 1px solid #ededed;
              flex: 0 0 1;
              background: #d8e6e7;
              box-shadow: 0 0 6px 3px #00000038;
              z-index: 100;
            }

            .${drawerClass}-close {
              transform: translate3d(-12em, 0, 0);
            }
            .${drawerClass}-open {
              transform: translate3d(0, 0, 0);
            }
            .${drawerClass}__backArrow {
            }
          `}
        </style>
      </>
    );
  };

  return (
    <PortalNode>
      {({ node }) => (node ? createPortal(renderContent(), node) : null)}
    </PortalNode>
  );
};

export default Drawer;
