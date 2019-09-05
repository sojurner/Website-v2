import { forwardRef } from 'react';
import Contact from '../compounds/Contact';
import GreetingAnimation from '../molecules/GreetingAnimation';
import MainLandingBackground from '../molecules/MainLandingBg';
import { TextSwap, ContactRedirect } from '../../utils/hooks';

import '../../styles/components/_main.scss';
import ScrollTo from '../molecules/ScrollTo';

const Main_Landing = ({ scrollToRef, ...props }, ref) => {
  return (
    <>
      <main ref={ref} {...props}>
        <TextSwap>
          {({ mounted }) => (
            <>
              <GreetingAnimation mounted={mounted} />
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
            </>
          )}
        </TextSwap>
        <ScrollTo
          iconName={'Down'}
          style={{
            color: 'white',
            fontSize: 30,
            textShadow: '0px 0px 10px black'
          }}
          onClick={() => scrollToRef(1)}
          indicator={'Scroll Down'}
          className={'main__landing'}
        />
        <MainLandingBackground />
      </main>
    </>
  );
};

export default forwardRef(Main_Landing);
