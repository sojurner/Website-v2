import { forwardRef } from 'react';

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

const MainDescription = ({ scrollToRef, ...props }, ref) => {
  return (
    <section ref={ref} {...props}>
      <div className={`${props.className}__${aboutMe}`}>
        <h1>A Little Bit About Me!</h1>
        <p>I'm a Front end Developer of 2 years currently in Denver, CO.</p>
        <div className={`${props.className}__${aboutMe}__${skillsets}`}>
          <div
            className={`${props.className}__${aboutMe}__${skillsets}-current`}
          >
            <p>Here is my ever-growing list of skills: </p>
            <Skillset className={'main__skillset'} skills={skills} />
          </div>
          <div className={`${props.className}__${aboutMe}__${skillsets}-tools`}>
            <p>...next a list of tools I use: </p>
            <Skillset className={'main__skillset'} skills={tools} />
          </div>
          <div
            className={`${props.className}__${aboutMe}__${skillsets}-future`}
          >
            <p>...and a list of technologies I would love to work with: </p>
            <Skillset className={'main__skillset'} skills={interests} />
          </div>
        </div>
        <div className={`${props.className}__${aboutMe}__${message}`}>
          <div />
          <p>
            As our world accelerates further into the breadth of technology,
          </p>
          <p>
            I took this oppurtunity to be a part of an exciting future and dove
            head first into the field software development.
          </p>
          <p>
            Since the start, I've been galvanized by the altruistic and
            awe-inspiring dev community, whom as a whole have achieved such
            incredible feats.
          </p>
          <p>
            It has thus far been a humbling experience, and one I continue to
            expand on as I progress as a developer.
          </p>
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
