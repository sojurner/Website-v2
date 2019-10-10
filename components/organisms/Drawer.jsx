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
            variant={'h1'}
            children={'Menu'}
          />
          <Menu className={menuClass} />
        </div>
        {open && <div className={`${drawerClass}__backdrop`} />}
        <style jsx>
          {`
            .${drawerClass} {
              display: flex;
              flex-flow: column nowrap;
              flex: 0 0 1;
              background: #f5fff4;
              position: fixed;
              top: 0;
              left: 0;
              height: -webkit-fill-available;
              width: 15em;
              border-right: 1px solid #ededed;
              box-shadow: 0 0 6px 3px #00000038;
              transition: 0.2s linear;
              z-index: 100;
            }

            .${drawerClass}-close {
              transform: translate3d(-16em, 0, 0);
            }
            .${drawerClass}-open {
              transform: translate3d(0, 0, 0);
            }
            .${drawerClass}__backArrow {
            }

            .${drawerClass}__backdrop {
              height: 100vh;
              width: 100vw;
              overflow: hidden;
              position: fixed;
              top: 0;
              left: 0;
              background: rgba(0, 0, 0, 0.5);
              z-index: 2;
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
