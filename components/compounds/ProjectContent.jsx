import { forwardRef } from 'react';
import TechStacks from '../molecules/TechStacks';
import { ContactRedirect as Redirect } from '../../utils/hooks';
import List from '../molecules/List';
import ScrollTo from '../molecules/ScrollTo';
import '../../styles/components/_projectContent.scss';

const ProjectContent = ({ scrollToRef, projects, ...props }, ref) => {
  return (
    <section {...props}>
      {projects.map((project, index) => {
        const {
          githubPages,
          githubURL,
          description,
          img_url,
          title,
          technologies
        } = project;
        return (
          <article ref={ref[index]} className={`${props.className}-${index}`}>
            <div className={`${props.className}__title-techstack`}>
              <h2>{title}</h2>
              <TechStacks
                className={`${props.className}__title-techstack_2`}
                list={technologies}
              />
            </div>
            <img className={`${props.className}__projectImg`} src={img_url} />
            <div className={`${props.className}__description-redirects`}>
              <p>{description}</p>
              <div />
              <Redirect>
                {({ openTab }) => (
                  <List
                    listItems={[
                      {
                        name: 'Github',
                        url: githubURL
                      },
                      {
                        name: 'Web',
                        url: githubPages
                      }
                    ]}
                    openTab={openTab}
                    style={{ width: 130 }}
                    direction="row"
                  />
                )}
              </Redirect>
            </div>
            {index !== projects.length - 1 && (
              <ScrollTo
                iconName={'Down'}
                color={'darkgrey'}
                onClick={() => scrollToRef(index + 1)}
                className={'project__content'}
              />
            )}
          </article>
        );
      })}
    </section>
  );
};
export default forwardRef(ProjectContent);
