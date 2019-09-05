import Icon from '../atoms/Icon';
import ScrollTo from '../molecules/ScrollTo';
import EmailForm from '../compounds/EmailForm';

const Footer = ({ scrollToRef, ...props }) => {
  return (
    <>
      <footer {...props}>
        <EmailForm />
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
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // border-top: 1px solid rgba(0, 0, 0, 0.14);
          padding: 20px 0;
          background: url(https://www.sccpre.cat/mypng/full/237-2372608_silhouette-of-mountain-range-trees-mountain-silhouette-png.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-blend-mode: overlay;
          background-color: #c9e9e0;

          background-position: bottom;
      }
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
