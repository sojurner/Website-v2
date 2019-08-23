import { useEffect, useState, useRef } from 'react';
import { withRouter } from 'next/router';

import Footer from '../templates/Footer';
import Base from '../templates/Base';
import ProjectsPanel from '../compounds/ProjectsPanel';
import ProjectsHeader from '../molecules/ProjectsHeader';
import ProjectContent from '../compounds/ProjectContent';

import { projects } from '../../assets/data/personalData';
import { useMainRefs } from '../../utils/hooks';
import '../../styles/components/_projects.scss';

const root = 'projects';
const header = 'header';
const panel = 'panel';
const content = 'content';
const footer = 'footer';

const options = { rootMargin: '-200px' };

const Projects = ({ router }) => {
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const [refs, scrollToRef] = useMainRefs(9);
  const [panelVisible, setPanelVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setPanelVisible(entry.isIntersecting);
    }, options);

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      if (panelRef.current) {
        observer.unobserve(panelRef.current);
      }
    };
  }, [panelRef, options]);

  useEffect(() => {
    if (router.query.name) scrollToRef(router.query.name);
  }, []);

  const navigateToPanel = () => {
    panelRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <div className={root}>
      <Base headerClass={`${root}__${header}`}>
        <ProjectsHeader navigateToPanel={navigateToPanel} ref={headerRef} />
        <ProjectsPanel
          panelVisible={panelVisible}
          ref={panelRef}
          scrollToRef={scrollToRef}
          projects={projects}
          className={`${root}__${panel}`}
        />
        <ProjectContent
          scrollToRef={scrollToRef}
          ref={refs}
          projects={projects}
          className={`${root}__${content}`}
        />
        <Footer scrollToRef={scrollToRef} className={`${root}__${footer}`} />
      </Base>
    </div>
  );
};

export default withRouter(Projects);
