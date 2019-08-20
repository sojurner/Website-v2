import { useState, useEffect } from 'react';
import { skillBars } from '../../assets/data/personalData';
import SkillBars from '../molecules/ResumeSkillBars';
import Icon from '../atoms/Icon';

const ResumeSkills = () => {
  const [delayBars, setDelayBars] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelayBars(false);
    }, 200);
  }, []);

  return (
    <>
      <section className="resume-programming">
        <span className="programming-skills">
          {' '}
          <Icon iconName={'Code'} size={1.5} />
          Programming Skills
        </span>
        <svg
          className="horizontal-chart"
          dx="100"
          y="00"
          width="600"
          height="260"
          aria-labelledby="title"
          role="img"
        >
          <SkillBars skills={skillBars.skills} delayBars={delayBars} />
        </svg>
      </section>
      <style jsx>{`
        .resume-programming {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default ResumeSkills;
