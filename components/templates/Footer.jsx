import Icon from '../atoms/Icon';
import ScrollTo from '../molecules/ScrollTo';
import RandomQuote from '../atoms/RandomQuote';
import EmailForm from '../compounds/EmailForm';
import Contact from '../compounds/Contact';
import { ContactRedirect } from '../../utils/hooks';

const Footer = ({ scrollToRef, ...props }) => {
  return (
    <>
      <footer {...props}>
        <EmailForm />
        <div className={'footer__sections'}>
          <div className={'footer__sections__logoContact'}>
            <h2>Contact</h2>
            <ContactRedirect>
              {({ openTab }) => <Contact openTab={openTab} direction="row" />}
            </ContactRedirect>
          </div>
          <div>
            <Icon iconName={'Copyright'} size={1.2} color={'gray'} />
            <img
              src={
                'https://res.cloudinary.com/paulkim/image/upload/v1552394091/images/misc/Paul-kim-logo.png'
              }
              height={35}
              width={150}
            />
          </div>
          <div>
            <RandomQuote className={'quote'} />
          </div>
          {/* <ScrollTo
            onClick={() => scrollToRef(0)}
            style={{
              color: '#142d5a',
              fontSize: 25
            }}
            color="grey"
            iconName={'Up'}
            indicator={'Back Top'}
            className={'footer'}
          /> */}
        </div>
      </footer>

      <style jsx>{`
        footer {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          background: url(https://www.sccpre.cat/mypng/full/237-2372608_silhouette-of-mountain-range-trees-mountain-silhouette-png.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-blend-mode: overlay;
          background-color: #c9e9e0;

          background-position: bottom;
        }

        .footer__sections {
          height: 100px;
          border-top: 1px solid rgba(0, 0, 0, 0.07);
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 20px 0 0 0;
        }
        .footer__sections__logoContact {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .footer__sections__logoContact h2 {
          color: gray;
        }
        img {
          margin-left: 10px;
          filter: grayscale(1);
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
