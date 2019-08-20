import { useState } from 'react';
import { withRouter } from 'next/router';
import Icon from '../atoms/Icon';

const ResumeWork = ({ router }) => {
  const [hoveredItem, setHoveredItem] = useState('');

  const handleHover = hoveredItem => setHoveredItem(hoveredItem);

  return (
    <section className="resume-recent-work">
      <span className="recent-work">
        <Icon iconName="Polygon" size={1.3} />
        Recent Work
      </span>
      <span className="recent-work-img">
        {[
          { title: 'Event-mapper', index: 4 },
          { title: 'Movie-tracker', index: 5 },
          { title: 'Fantasy-futbol', index: 3 }
        ].map((item, index) => {
          return (
            <span key={`work-${index}`} className="recent-work-gifs">
              <img
                height="150"
                width="200"
                alt="Tech stack skills"
                className={
                  item.title === hoveredItem
                    ? `recent-work-gif recent-work-gif-${index} recent-work-gif-active`
                    : `recent-work-gif recent-work-gif-${index}`
                }
                name={item.title}
                src={`https://res.cloudinary.com/paulkim/image/upload/v1552394727/images/projects/${
                  item.title
                }.png`}
                onMouseEnter={() => handleHover(item.title)}
                onMouseLeave={() => handleHover('')}
                onClick={() => {
                  router.push('/projects?name=' + item.index);
                }}
              />
              {hoveredItem === item ? (
                <span className={`resume-project resume-project-${index}`}>
                  Click to view
                </span>
              ) : (
                <span className={`resume-project resume-project-${index}`}>
                  {item.title}
                </span>
              )}
            </span>
          );
        })}
      </span>
    </section>
  );
};

export default withRouter(ResumeWork);
