import Typography from '../atoms/Typography';
import '../../styles/components/_greeting.scss';
import Skillset from '../molecules/SkillSet';
import { skills } from '../../assets/data/personalData';

const Name = () => (
  <Typography variant="h1" children={'Paul Kim'} className="landing-header" />
);

const GreetingAnimation = ({ mounted }) => {
  const typedHeader = () => {
    switch (mounted) {
      case 2:
        return <Name />;
      case 1:
        return (
          <Typography
            variant="h1"
            children={'My Name is ...'}
            className="landing-header-initial-2"
          />
        );
      case 0:
        return (
          <Typography
            variant="h1"
            children={'Hello'}
            className="landing-header-initial-1"
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="landing-main">
      {typedHeader()}
      <div className="landing-main__header">
        <Typography
          variant="h1"
          children={'Front-end Dev'}
          className={
            mounted === 3 ? 'landing-main__title-show' : 'landing-main__title'
          }
        />
        {mounted === 3 && (
          <Skillset
            style={{
              transform: 'translate3d(81px, 35px, 0px)'
            }}
            skills={skills}
          />
        )}
      </div>
    </div>
  );
};

export default GreetingAnimation;
