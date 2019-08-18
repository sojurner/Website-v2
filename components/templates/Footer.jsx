import Icon from '../atoms/Icon';

const Footer = props => {
  return (
    <>
      <footer {...props}>
        <Icon iconName={'Copyright'} size={0.6} />
        <p>Paul Kim - all rights reserved</p>
      </footer>

      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(0, 0, 0, 0.14);
          padding: 20px 0;
        }
        p {
          margin-left: 5px;
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default Footer;
