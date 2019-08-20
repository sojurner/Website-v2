import { useState, useEffect } from 'react';
import ResumeHeader from '../atoms/ResumeHeader';
import ResumeSkills from '../molecules/ResumeSkills';
import ResumeAbout from '../atoms/ResumeAbout';
import ResumeInterests from '../atoms/ResumeInterests';
import ResumeWork from '../molecules/ResumeWork';
import ResumeExperience from '../atoms/ResumeExperience';
import ResumeEducation from '../atoms/ResumeEducation';
import Base from '../templates/Base';
import Footer from '../templates/Footer';
import { useMainRefs } from '../../utils/hooks';

import '../../styles/components/_resume.scss';

const Resume = () => {
  const [opaque, setOpaque] = useState(true);
  const [refs, scrollToRef] = useMainRefs(1);

  useEffect(() => {
    setTimeout(() => {
      setOpaque(false);
    }, 100);
  }, []);
  console.log(refs);
  return (
    <div
      ref={refs[0]}
      className={opaque ? 'chart-container-hide' : 'chart-container-show'}
    >
      <Base headerClass={'root__header'}>
        <main className="resume-page">
          <ResumeHeader />
          <i
            className="fas fa-download resume-official-link"
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1anbv6eDYMmSOrqo2xnDf0jVa1caoEIK2/view',
                '_blank'
              )
            }
          />
          <ResumeSkills />
          <ResumeAbout />
          <ResumeInterests />
          <ResumeWork />
          <section className="resume-experience-education">
            <ResumeExperience />
            <ResumeEducation />
          </section>
          <section className="left-aside" />
        </main>
        <Footer scrollToRef={scrollToRef} className={`root__footer`} />
      </Base>
    </div>
  );
};

export default Resume;
