import Typography from '../atoms/Typography';
import Contact from '../compounds/Contact';
import GreetingAnimation from '../molecules/GreetingAnimation';
import BackgroundImage from '../molecules/BackgroundImage';
import { TextSwap, ContactRedirect } from '../../utils/hooks';

import '../../styles/components/_main.scss';

const Main_Landing = props => {
  return (
    <>
      <main {...props}>
        <TextSwap>
          {({ mounted }) => (
            <>
              <GreetingAnimation mounted={mounted} />
              {mounted === 3 && (
                <div className="main__contact">
                  <ContactRedirect>
                    {({ openTab }) => (
                      <Contact
                        openTab={openTab}
                        style={{ margin: '52px 10px', height: 'inherit' }}
                        direction="column"
                      />
                    )}
                  </ContactRedirect>
                </div>
              )}
            </>
          )}
        </TextSwap>
        <BackgroundImage />
      </main>
    </>
  );
};

export default Main_Landing;
