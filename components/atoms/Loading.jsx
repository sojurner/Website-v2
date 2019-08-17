import Icon from './Icon';
import { PortalNode } from '../../utils/hooks';

const Loading = () => {
  const renderContent = () => (
    <>
      <div>
        <Icon iconName={'Loading'} size={2} spin={5} />;
      </div>
      <style jsx>{`
        div {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );

  return (
    <PortalNode>
      {({ node }) => (node ? createPortal(renderContent(), node) : null)}
    </PortalNode>
  );
};

export default Loading;
