import { forwardRef } from 'react';
import Icon from '../atoms/Icon';
import { experienceInfo } from '../../assets/data/personalData';
import Carousel from 'react-swipeable-views';
import '../../styles/components/_timeline.scss';
import TimelineControl from '../wrappers/TimelineControl';
import ScrollTo from '../molecules/ScrollTo';

const years = [2009, 2013, 2017, 2019];

const Main_Timeline = (props, ref) => {
  return (
    <div ref={ref} {...props} className={'timeline'}>
      <TimelineControl itemCount={experienceInfo.length - 1}>
        {({
          prevSelectedItem,
          nextSelectedItem,
          handleItemChange,
          selectedItem
        }) => {
          return (
            <>
              <section>
                <Carousel
                  style={{ height: '100%' }}
                  axis={'y'}
                  index={selectedItem}
                  onChangeIndex={handleItemChange}
                  enableMouseEvents
                >
                  {experienceInfo.map((experience, index) => {
                    const { details, title, association, img } = experience;
                    return (
                      <div
                        key={title}
                        className={`carousel__container-${index}`}
                      >
                        <div className={'carousel__container__imgDetails'}>
                          <img
                            className={'carousel__container__imgDetails-img'}
                            src={`https://res.cloudinary.com/paulkim/image/upload/v1552393705/images/professional/${img}`}
                          />
                          <div
                            className={
                              'carousel__container__imgDetails-details'
                            }
                          >
                            <h1 children={title} />
                            <h5>
                              {association}{' '}
                              <span>
                                ( {experience.start} - {experience.end} )
                              </span>
                            </h5>
                          </div>
                        </div>
                        <p children={details} />
                      </div>
                    );
                  })}
                </Carousel>
              </section>
              <aside>
                <div className={'timeline__navigation'}>
                  <Icon
                    className="timeline__navigation__up"
                    iconName={'Up'}
                    size={1.2}
                    onClick={prevSelectedItem}
                  />
                  <ul>
                    {years.map((year, index) => (
                      <li
                        onClick={() => handleItemChange(index)}
                        className={
                          index === selectedItem
                            ? 'timeline__navigation__listYear-active'
                            : 'timeline__navigation__listYear'
                        }
                        children={year}
                      />
                    ))}
                  </ul>
                  <Icon
                    onClick={nextSelectedItem}
                    className="timeline__navigation__up"
                    iconName={'Down'}
                    size={1.2}
                  />
                </div>
              </aside>
            </>
          );
        }}
      </TimelineControl>

      {/* <MainTimelineBackground /> */}
    </div>
  );
};

export default forwardRef(Main_Timeline);
