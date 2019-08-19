import Icon from '../atoms/Icon';
import ScrollTo from '../molecules/ScrollTo';

const Footer = ({ scrollToRef, ...props }) => {
  return (
    <>
      <footer {...props}>
        <div className={'footer__copyright'}>
          <Icon iconName={'Copyright'} size={0.6} />
          <p>Paul Kim - all rights reserved</p>
        </div>
        <ScrollTo
          onClick={() => scrollToRef(0)}
          style={{
            color: '#142d5a',
            fontSize: 25
          }}
          color="grey"
          iconName={'Up'}
          indicator={'Back Top'}
          className={'footer'}
        />
      </footer>

      <style jsx>{`
        footer {
          background: #dbece7;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(0, 0, 0, 0.14);
          padding: 20px 0;
        }

        .footer__copyright {
          display: flex;
          justify-content: center;
          align-items: center;
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
