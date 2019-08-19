import Footer from '../templates/Footer';
import Base from '../templates/Base';
import ProjectsPanel from '../compounds/ProjectsPanel';
import '../../styles/components/_projects.scss';
import ProjectContent from '../compounds/ProjectContent';
import { projects } from '../../assets/data/personalData';
import { useMainRefs } from '../../utils/hooks';

const root = 'projects';
const header = 'header';
const panel = 'panel';
const content = 'content';
const footer = 'footer';

const Projects = () => {
  const [refs, scrollToRef] = useMainRefs(9);

  return (
    <div className={root}>
      <Base headerClass={`${root}__${header}`}>
        <ProjectsPanel
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

export default Projects;
