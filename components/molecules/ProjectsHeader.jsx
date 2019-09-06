import { forwardRef, useRef, useEffect, useImperativeHandle } from 'react';
import { TweenMax, Power3 } from 'gsap';

import '../../styles/components/_projectsHeader.scss';
import ScrollTo from './ScrollTo';

const ProjectsHeader = ({ navigateToPanel, ...props }, ref) => {
  const headerRef = useRef(null);
  let h1Ref = useRef(null);

  useImperativeHandle(ref, () => headerRef.current);

  useEffect(() => {
    TweenMax.from(h1Ref, 0.8, {
      opacity: 0,
      y: -20,
      ease: Power3.easeInOut,
      delay: 0.6
    });
  }, []);

  return (
    <header ref={headerRef} className={'projects__landingHeader'}>
      <h1 ref={el => (h1Ref = el)} className={'projects__landingHeader-h1'}>
        Projects of Present Past{' '}
      </h1>
      <ScrollTo
        indicator="Click to view"
        iconName={'Down'}
        className={'projects__landingHeader-scrollTo'}
        color={'gray'}
        onClick={navigateToPanel}
      />
    </header>
  );
};

export default forwardRef(ProjectsHeader);
