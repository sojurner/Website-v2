import { useRef, useState, useEffect, forwardRef } from 'react';

import Skillset from '../molecules/SkillSet';
import {
  skillsOnly as skills,
  tools,
  interests
} from '../../assets/data/personalData';

import '../../styles/components/_main_description.scss';
import ScrollTo from '../molecules/ScrollTo';

const aboutMe = 'aboutMe';
const skillsets = 'skillsets';
const message = 'message';

const endOfPageOptions = { rootMargin: '0px 0px -100%' };
const startOfPageOptions = { rootMargin: '0px' };

const MainDescription = ({ scrollToRef, ...props }, ref) => {
  return (
    <section ref={ref} {...props}>
      {/* {console.log({ introVisible, outroVisible }) || null} */}
      <div className={`${props.className}__${aboutMe}`}>
        <div className={`${props.className}__${aboutMe}__${skillsets}`}>
          <h1 style={{ padding: '50px 0 0 0' }}>A Little Bit About Me!</h1>
          <p>I'm a Front end Developer of 2 years located in Denver, CO.</p>
          <div
            className={`${props.className}__${aboutMe}__${skillsets}-current`}
          >
            <p>Here is my ever-growing list of skills: </p>
            <Skillset className={'main__skillset'} skills={skills} />
          </div>
          <div className={`${props.className}__${aboutMe}__${skillsets}-tools`}>
            <p>...next a list of tools I use: </p>
            <Skillset className={'main__skillset2'} skills={tools} />
          </div>
          <div
            className={`${props.className}__${aboutMe}__${skillsets}-future`}
          >
            <p>...and a list of technologies I would love to work with: </p>
            <Skillset className={'main__skillset'} skills={interests} />
          </div>
        </div>
        <div className={`${props.className}__${aboutMe}__${message}`}>
          <div className={`${props.className}__${aboutMe}__${message}-intro`}>
            <img
              style={{
                position: 'sticky',
                top: '30%',
                transform: 'translate(160%, 0px)'
                // transform: 'translate(160%, 50%)'
              }}
              src={
                'https://res.cloudinary.com/paulkim/image/upload/v1552393702/images/professional/army_photo.jpg'
              }
            />

            <div className={`${props.className}__${aboutMe}__${message}-text`}>
              <p>
                After serving Four Years in the{' '}
                <strong>United States Army</strong> as a Medic...
              </p>
            </div>
            <div className={`${props.className}__${aboutMe}__${message}-text`}>
              <p>
                I began my ambitious journey into the World software
                development.
              </p>
            </div>
            <div className={`${props.className}__${aboutMe}__${message}-text`}>
              <p>
                And Since I've Began, I've been <strong> awe-struck </strong> by
                the incredible feats achieved by the dev community.
              </p>
            </div>
          </div>
          <div className={`${props.className}__${aboutMe}__${message}-closing`}>
            <img
              style={{
                position: 'sticky',
                top: '30%',
                transform: 'translate(0, 0px)'
              }}
              src={
                'https://res.cloudinary.com/paulkim/image/upload/v1552394092/images/misc/family-cropped.jpg'
              }
            />

            <div className={`${props.className}__${aboutMe}__${message}-text2`}>
              <p>
                Their breadth of knowledge and altruism has inspired me to
                strive for similar greatness.
              </p>
            </div>

            <div className={`${props.className}__${aboutMe}__${message}-text2`}>
              <p>It has thus far been a humbling and enlightening experience</p>
            </div>
            <div className={`${props.className}__${aboutMe}__${message}-text2`}>
              <p>
                An Experience I look to expand on in my progression as a
                developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollTo
        iconName={'Down'}
        onClick={() => scrollToRef(2)}
        color={'#142d5a'}
        className={'main__description'}
      />
    </section>
  );
};

export default forwardRef(MainDescription);
