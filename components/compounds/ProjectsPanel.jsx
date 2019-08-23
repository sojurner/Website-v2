import { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';

import Card from '../atoms/Card';
import { TweenMax, Power3 } from 'gsap';
import TechStacks from '../molecules/TechStacks';

const ProjectsPanel = (
  { projects, panelVisible, scrollToRef, options, ...props },
  ref
) => {
  const panelRef = useRef(null);

  useImperativeHandle(ref, () => panelRef.current);
  return (
    <>
      <section
        ref={panelRef}
        {...props}
        className={
          panelVisible
            ? `${props.className} ${props.className}-visible`
            : `${props.className}`
        }
      >
        {projects.map((project, index) => {
          const { technologies, img_url, title } = project;
          return (
            <Card
              onClick={() => scrollToRef(index)}
              style={{ backgroundImage: `url('${img_url}')` }}
              className={`${props.className}__projectCard`}
            >
              <h1>{title}</h1>
              <TechStacks
                className={`${props.className}__projectCard__techStack`}
                list={technologies}
              />
            </Card>
          );
        })}
      </section>
    </>
  );
};

export default forwardRef(ProjectsPanel);
