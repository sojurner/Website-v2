import Icon from '../atoms/Icon';
import RandomQuote from '../atoms/RandomQuote';
import EmailForm from '../compounds/EmailForm';
import Contact from '../compounds/Contact';
import { ContactRedirect } from '../../utils/hooks';

const Footer = ({ scrollToRef, ...props }) => {
  return (
    <>
      <footer {...props}>
        <div className={'footer__sections'}>
          <div className={'footer__sections__logoContact'}>
            <p>
              c. <strong>(562) - 483 - 9937</strong>
            </p>
            <ContactRedirect>
              {({ openTab }) => <Contact openTab={openTab} direction="row" />}
            </ContactRedirect>
          </div>
          <div>
            <Icon iconName={'Copyright'} size={1} color={'gray'} />
            <img
              src={
                'https://res.cloudinary.com/paulkim/image/upload/v1552394091/images/misc/Paul-kim-logo.png'
              }
              height={25}
              width={115}
            />
          </div>
          <div className={'quote'}>
            <RandomQuote className={'quote'} />
          </div>
        </div>
        <EmailForm />
      </footer>

      <style jsx>{`
        footer {
          position: relative;
          display: flex;
          flex-direction: row;
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

        .root__footer {
          margin: 0;
        }

        .quote {
          width: 235px;
        }

        .footer__sections {
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 24px;
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
