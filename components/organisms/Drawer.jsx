import { createPortal } from 'react-dom';
import Menu from '../compounds/Menu';
import { PortalNode } from '../../utils/hooks';
import Typography from '../atoms/Typography';

const drawerClass = 'drawer';
const menuClass = `${drawerClass}__menu`;

const Drawer = ({ open }) => {
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
              background: #fdfdfd;
              position: absolute;
              height: -webkit-fill-available;
              top: 0;
              left: 0;
              transition: 0.2s linear;
              border-right: 1px solid #ededed;
              flex: 0 0 1;
            }

            .${drawerClass}-close {
              transform: translate3d(-170px, 0, 0);
            }
            .${drawerClass}-open {
              transform: translate3d(0, 0, 0);
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
