import iconsList from '../../assets/icons';
import MdiIcon from '@mdi/react';

const Icon = ({ iconName, ...props }) => {
  const path = iconsList[iconName];

  return (
    <>
      <MdiIcon path={path} {...props} />
      <style>{`
        .timeline__navigation__up {
          fill: #b1b1b1;
          cursor: pointer;
         }
        .timeline__navigation__up:hover {
          fill: grey;
        }
      `}</style>
    </>
  );
};

export default Icon;
