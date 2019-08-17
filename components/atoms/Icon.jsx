import iconsList from '../../assets/icons';
import MdiIcon from '@mdi/react';

const Icon = ({ iconName, ...props }) => {
  const path = iconsList[iconName];

  return <MdiIcon path={path} {...props} />;
};

export default Icon;
