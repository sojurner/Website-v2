import { MenuToggle } from '../../utils/hooks';
import Header from './Header';
import Drawer from '../organisms/Drawer';

const Base = ({ headerClass, children }) => (
  <MenuToggle>
    {({ open, handleToggle }) => (
      <>
        <Header handleToggle={handleToggle} className={headerClass} />
        <Drawer handleToggle={handleToggle} open={open} />
        {children}
      </>
    )}
  </MenuToggle>
);

export default Base;
