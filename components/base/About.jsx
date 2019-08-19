import Base from '../templates/Base';
import Typography from '../atoms/Typography';
import SkillSet from '../molecules/SkillSet';
import Contact from '../compounds/Contact';
import BucketList from '../compounds/BucketList';
import Toggle from '../molecules/Toggle';

import { ContactRedirect, Switch } from '../../utils/hooks';
import { bucketList, skills } from '../../assets/data/personalData';
import '../../styles/layouts/_about.scss';
import RandomQuote from '../atoms/RandomQuote';

const aboutClass = 'about';

const About = () => {
  return (
    <Base headerClass={'root__header'}>
      <div className={aboutClass}>
        <aside className={'profile-card'}>
          <header>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
              }}
            >
              <img
                src={
                  'https://res.cloudinary.com/paulkim/image/upload/v1566057500/images/misc/Paul_Kim-profile-pic.png'
                }
                className={'avatar'}
              />

              <div className={'divider'} />
              <SkillSet className={'about__skillset'} skills={skills} />
            </div>
            <div className={'contact-switch'}>
              <ContactRedirect>
                {({ openTab }) => (
                  <Contact direction={'column'} openTab={openTab} />
                )}
              </ContactRedirect>
              <Switch switches={['personal', 'professional']}>
                {({ activeSwitch, handleChange }) => (
                  <div className={'contact-switch__switchTable'}>
                    <div className={'contact-switch__switch'}>
                      <Typography
                        variant="h3"
                        children="Bucket List"
                        className={'switch__header'}
                      />
                      <Toggle
                        activeSwitch={activeSwitch}
                        handleChange={handleChange}
                        toggleProps={['personal', 'professional']}
                      />
                    </div>

                    <BucketList
                      bucketList={bucketList.filter(
                        items => items.type === activeSwitch
                      )}
                      header={activeSwitch}
                    />
                  </div>
                )}
              </Switch>
            </div>
            <div className={'quote'}>
              <RandomQuote className={'quote'} />
            </div>
            <style jsx>{`
              .contact-switch {
                display: flex;
                justify-content: space-evenly;
                min-height: 370px;
                max-height: 370px;
              }
              .contact-switch__switchTable {
                margin-top: 25px;
                box-shadow: 0px 3px 5px 1px #00000030;
              }

              .contact-switch__switch {
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .quote {
                margin: 26px;
                border-top: 1px solid #00000012;
                padding-top: 10px;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
              .divider {
                width: 1px;
                border-left: 0.5px solid rgba(19, 19, 19, 0.2);
                height: 50px;
              }

              .avatar {
                height: 70px;
                border-radius: 50%;
              }
            `}</style>
          </header>
        </aside>
      </div>
    </Base>
  );
};

export default About;
