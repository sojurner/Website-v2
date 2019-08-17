import { MenuToggle } from '../../utils/hooks';
import Header from './Header';
import Drawer from '../organisms/Drawer';

const Base = ({ headerClass, children }) => (
  <MenuToggle>
    {({ open, handleToggle }) => (
      <>
        <Header
          open={open}
          handleToggle={handleToggle}
          className={headerClass}
        />
        <Drawer open={open} />
        {children}
      </>
    )}
  </MenuToggle>
);

export default Base;
