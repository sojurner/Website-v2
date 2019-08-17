import Typography from '../atoms/Typography';
import GreetingAnimation from '../molecules/GreetingAnimation';
import { TextSwap, ContactRedirect } from '../../utils/hooks';
import Contact from '../compounds/Contact';
import '../../styles/components/_main.scss';

const mainClass = 'main';
const greetingClass = `${mainClass}__greeting`;

const Main = props => {
  return (
    <>
      <main {...props}>
        <TextSwap>
          {({ mounted }) => (
            <>
              <GreetingAnimation mounted={mounted} />
              {mounted === 3 && (
                <div className="contact-personalImg">
                  <ContactRedirect>
                    {({ openTab }) => (
                      <Contact
                        openTab={openTab}
                        style={{ margin: '52px 10px' }}
                        direction="column"
                      />
                    )}
                  </ContactRedirect>
                  <img
                    className="contact-personalImg__img contact-personalImg__img-1"
                    src={
                      'https://res.cloudinary.com/paulkim/image/upload/v1552394092/images/misc/family-cropped.jpg'
                    }
                  />
                  <img
                    className="contact-personalImg__img contact-personalImg__img-2"
                    src={
                      'https://res.cloudinary.com/paulkim/image/upload/v1552393702/images/professional/army_photo.jpg'
                    }
                  />
                </div>
              )}
            </>
          )}
        </TextSwap>
      </main>
    </>
  );
};

export default Main;
